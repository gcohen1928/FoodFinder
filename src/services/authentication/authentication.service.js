import React from "react";
import { initializeApp } from 'firebase/app'
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCRP249IKWrKSxl67NFYCaurJUxJFcuSKw",
  authDomain: "mealstogo-e259e.firebaseapp.com",
  projectId: "mealstogo-e259e",
  storageBucket: "mealstogo-e259e.appspot.com",
  messagingSenderId: "402313065584",
  appId: "1:402313065584:web:852ad478fd4ceab43bf0b5"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)


export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const registerRequest = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const sessionCheck = (setUser, setIsLoading) => {
  auth.onAuthStateChanged((usr) => {
    if(usr) {
        setUser(usr)
        setIsLoading(false)
    } else {
        setIsLoading(false)
    }
} )
}

export const userLogout = (setUser) => {
  setUser(null)
  auth.signOut()
}
