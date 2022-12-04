import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { TodoContext } from '../../context/ContextTodo'

const ShowTaskContainer = styled.div`
    height: 3rem;
    width: 35rem;
    background-color: #575757;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`
const ShowTask = styled.h2`
    height: 3rem;
    width: 25rem;
    color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
`
const DeleteTaskButton = styled.button`
    height: 2rem;
    width: 5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    border: none;
`

const Tasks = ({tarea}) => {
    const {tasks, setTasks, updateLocal} = useContext(TodoContext)

    const deleteTask = () => {
        const fillterComplete = tasks.filter((task) => task!=tarea)
        setTasks(fillterComplete)
    }

    updateLocal(tasks)


  return (
    <>
        <ShowTaskContainer>
            <ShowTask>{tarea}</ShowTask>
            <DeleteTaskButton onClick={deleteTask}>Borrar</DeleteTaskButton>
        </ShowTaskContainer>
    
    </>
  )
}

export default Tasks