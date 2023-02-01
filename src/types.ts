import { Dispatch, SetStateAction } from "react"

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
export interface ITodoItemCard extends ITodoItem {
  key: number
  deleteItem: (id: number) => void
  toggleItem: (id: number) => void
}
export interface TypeInputValues {
  todoItems: ITodoItem[]
  setTodoItems: Dispatch<
    SetStateAction<ITodoItem[]>
  >
}
