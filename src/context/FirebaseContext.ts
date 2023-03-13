import type { IFirebaseContext } from 'utils/types'
import { createContext } from 'react'

const defaultState = {
  firebase: [],
  auth: [],
  firestore: []
}

export const FirebaseContext = createContext<IFirebaseContext>(defaultState)
