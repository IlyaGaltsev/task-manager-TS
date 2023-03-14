import { FirebaseContext } from './context/FirebaseContext'
import { HashRouter as Router } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import { config } from './firebase-config'
import ReactDOM from 'react-dom/client'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { App } from './App'
import React from 'react'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

firebase.initializeApp(config)
const auth = firebase.auth()
const firestore = firebase.firestore()

root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase, auth, firestore }}>
      <Router>
        <App />
      </Router>
    </FirebaseContext.Provider>
  </React.StrictMode>
)
