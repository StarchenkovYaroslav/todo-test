import { initializeApp } from 'firebase/app'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

// export const dbInit = () => {
  initializeApp({
    apiKey: "AIzaSyB8X8uykLOA1sN3skstUgmmLiX8_ECbv9Q",
    authDomain: "todo-ccda3.firebaseapp.com",
    projectId: "todo-ccda3",
    storageBucket: "todo-ccda3.appspot.com",
    messagingSenderId: "700609825460",
    appId: "1:700609825460:web:77761a6730839b958065e1",
    measurementId: "G-3N088V8S8Y"
  })
// }


const todoCollection = collection(getFirestore(), 'todo')

export const addTodo = async (data) => {
  return addDoc(todoCollection, data)
}

