import React, { createContext } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { App } from "./App"
import firebase from "firebase/compat/app"
import { config } from "./firebase-config"
import "./index.scss"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

firebase.initializeApp(config)
const auth = firebase.auth()
const firestore = firebase.firestore()

interface IFirebaseContext {
  firebase: any
  auth: any
  firestore: any
}

const defaultState = {
  firebase: [],
  auth: [],
  firestore: []
}

export const Context = createContext<IFirebaseContext>(defaultState)

root.render(
  <React.StrictMode>
    <Context.Provider value={{ firebase, auth, firestore }}>
      <Router>
        <App />
      </Router>
    </Context.Provider>
  </React.StrictMode>
)
