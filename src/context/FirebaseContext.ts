import type { IFirebaseContext } from './../types'
import { createContext } from 'react'

const defaultState = {
  firebase: [],
  auth: [],
  firestore: []
}

export const FirebaseContext = createContext<IFirebaseContext>(defaultState)
