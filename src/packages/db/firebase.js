import { initializeApp } from 'firebase/app'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getMetadata } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL } from '@firebase/storage'

initializeApp({
  apiKey: "AIzaSyB8X8uykLOA1sN3skstUgmmLiX8_ECbv9Q",
  authDomain: "todo-ccda3.firebaseapp.com",
  projectId: "todo-ccda3",
  storageBucket: "todo-ccda3.appspot.com",
  messagingSenderId: "700609825460",
  appId: "1:700609825460:web:77761a6730839b958065e1",
  measurementId: "G-3N088V8S8Y"
})

export const todoCollection = collection(getFirestore(), 'todo')
const storage = getStorage()

const _uploadFile = async (file) => {
  const path = `${uuidv4()}.${file.name.replaceAll(' ', '_')}`

  await uploadBytes(ref(storage, path), file)

  return path
}

const _uploadFiles = async (files) => {
  const paths = []

  for (let i = 0; i < files.length; i++) {
    paths.push(await _uploadFile(files[i]))
  }

  return paths
}

const _addTodo = async (data) => {
  return addDoc(todoCollection, data)
}

export const createTodo = async ({ files, ...rest }) => {
  const paths = await _uploadFiles(files)
  await _addTodo({ ...rest, files: paths })
}

export const getFileDownloadUrl = async (path) => {
  return await getDownloadURL(ref(storage, path))
}
