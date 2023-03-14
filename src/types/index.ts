import { type Dispatch, type SetStateAction } from 'react'

export interface ITodoList {
  todoItems: ITodoItem[]
  deleteItem: (id: number) => void
  toggleItem: (id: number) => void
}

export interface ITodoItem {
  id: number
  title: string
  flag: boolean
}

export interface IFirebaseContext {
  firebase: any
  auth: any
  firestore: any
}

export interface ITodoItemCard extends ITodoItem {
  key: number
  deleteItem: (id: number) => void
  toggleItem: (id: number) => void
}

export interface TypeInputValues {
  todoItems: ITodoItem[]
  setTodoItems: Dispatch<SetStateAction<ITodoItem[]>>
}

export interface IFileds {
  name: string
  placeholder: string
  type?: string
  options: object
}
