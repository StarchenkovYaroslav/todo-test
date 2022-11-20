import { initializeApp } from 'firebase/app'
import { collection, addDoc, getFirestore, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid';

initializeApp({
  apiKey: "AIzaSyB8X8uykLOA1sN3skstUgmmLiX8_ECbv9Q",
  authDomain: "todo-ccda3.firebaseapp.com",
  projectId: "todo-ccda3",
  storageBucket: "todo-ccda3.appspot.com",
  messagingSenderId: "700609825460",
  appId: "1:700609825460:web:77761a6730839b958065e1",
  measurementId: "G-3N088V8S8Y"
})

/**
 * Reference to todo collection in firebase
 */
export const todoCollection = collection(getFirestore(), 'todo')

/**
 * Firebase storage
 */
const storage = getStorage()

/**
 * Uploads file to firebase storage
 *
 * @param {File} file - file to download to firebase storage
 * @returns {Promise<string>} - file path in firebase storage
 * @function
 * @private
 */
const _uploadFile = async (file) => {
  const path = `${uuidv4()}.${file.name.replaceAll(' ', '_')}`

  await uploadBytes(ref(storage, path), file)

  return path
}

/**
 * Uploads files to firebase storage
 *
 * @param {FileList} files - files to download to firebase storage
 * @returns {Promise<string[]>} - array of files paths in firebase storage
 * @function
 * @private
 */
const _uploadFiles = async (files) => {
  const paths = []

  for (let i = 0; i < files.length; i++) {
    paths.push(await _uploadFile(files[i]))
  }

  return paths
}

/**
 * Adds todo in firebase
 *
 * @param {obj} data - todo data
 * @param {string} data.title - todo title
 * @param {string} data.description - todo description
 * @param {Timestamp} data.description - date for todo to expire
 * @param {string[]} data.files - files server paths
 * @param {boolean} data.done - todo status of being done or not
 * @returns {Promise<void>}
 * @function
 * @private
 */
const _addTodo = async (data) => {
  await addDoc(todoCollection, data)
}

/**
 * Uploads todo files and adds todo to firebase
 *
 * @param {obj} data - todo data
 * @param {FileList} data.files - files to download to server
 * @param {string} data.title - todo title
 * @param {string} data.description - todo description
 * @param {Timestamp} data.due - date for todo to expire
 * @param {boolean} data.done - todo status of being done or not
 * @returns {Promise<void>}
 * @function
 */
export const createTodo = async ({ files, ...rest }) => {
  const paths = await _uploadFiles(files)
  await _addTodo({ ...rest, files: paths })
}

/**
 * Retrieves url for file to download
 *
 * @param {string} path - server file path
 * @returns {Promise<string>} - url for file to download
 * @function
 */
export const getFileDownloadUrl = async (path) => {
  return await getDownloadURL(ref(storage, path))
}

/**
 * Update update todo done status by its id
 *
 * @param {string} id - todo id in firebase
 * @param {boolean} done - todo done status
 * @returns {Promise<void>}
 * @function
 */
export const updateDoneById = async (id, done) => {
  await updateDoc(doc(todoCollection, id), { done })
}

/**
 * Removes todo from firebase by its id
 *
 * @param {string} id - todo id in firebase
 * @returns {Promise<void>}
 * @function
 */
export const removeTodoById = async (id) => {
  await deleteDoc(doc(todoCollection, id))
}
