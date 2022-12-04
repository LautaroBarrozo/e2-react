import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const TodoContext = createContext()

export const ContextTodo = ({ children }) => {
  
  let tareas = JSON.parse(localStorage.getItem("tasks")) || []

  const [tasks, setTasks] = useState(tareas)

  const updateLocal = () =>{
    return localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  return (
    <TodoContext.Provider value={{ tasks, setTasks, updateLocal}}>
      {children}
    </TodoContext.Provider>
  )
}


