import type { IFirebaseContext } from 'src/types'
import { createContext } from 'react'

const defaultState = {
  firebase: [],
  auth: [],
  firestore: []
}

export const FirebaseContext = createContext<IFirebaseContext>(defaultState)
