import React, { useState } from 'react';
import { InputValues } from '../components/InputValues';

import './App.scss';
import { ITodoList, ITodoItem } from '../types';
import { TodoList } from '../components/TodoList';
import { useEffect } from 'react';

const App:React.FC = () => {
  let startMass =JSON.parse(localStorage.getItem('todo') || "[ ]")

  const [todoItems, setTodoItems] = useState<ITodoItem[]>(startMass )

  const deleteItem = (id:number):void => {
    setTodoItems(todoItems.filter(item => item.id !== id))
  }
  const toggleItem = (id:number):void => {
          setTodoItems(todoItems.map(item => {
        if (item.id !== id) return item;
        return {...item, flag: !item.flag}   
      }))
     }
    useEffect(()=>{
      localStorage.setItem('todo', JSON.stringify(todoItems))
    },[todoItems])
  return(
    <div className='app_wrapper'>
      <InputValues 
        todoItems={todoItems} 
        setTodoItems={setTodoItems}/>
      <TodoList 
        deleteItem={deleteItem}
        toggleItem={toggleItem}
        todoItems={todoItems}/>
    </div>
  )
}

export {App};
