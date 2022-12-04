import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import Tasks from '../components/styles/Tasks'
import { TodoContext } from '../context/ContextTodo'

const TodoMainContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 35rem;
    width: 45rem;
    background-color: #1f1f1f;
    border-radius: 2rem;

`
const TodoInputContainer = styled.form`
    height: 6rem;
    gap: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TodoInput = styled.input`
    height: 1.5rem;
    width: 15rem;
    border-radius: 0.5rem;
    padding-left: 1rem;

`

const AddButton = styled.button`
    width: 5rem;
    height: 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
`

const TasksContainer = styled.div`
    height: 23rem;
    flex-direction: column;
    display: flex;
    align-items: center;
    gap: 2rem;
    overflow-y: scroll;
`
const DeleteAllContainer = styled.div`
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`


const DeleteAllTasksButton = styled.button`
    height: 1.5rem;
    width: 10rem;
    border-radius: 0.5rem;
    cursor: pointer;
`

const Todo = () => {

  const {tasks, setTasks} = useContext(TodoContext) 

  const saveLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }


  const submit = (e) => {
    e.preventDefault()

    if(tasks.some((task) => task.toLowerCase() === e.target.todo.value.toLowerCase())){
        return alert("k hace chinchulin")
    } else if (e.target.todo.value === ""){
        return alert("comleta e campo cara masa")
    }
    setTasks([...tasks, e.target.todo.value])
    console.log(tasks);

  }

  const deleteAll = () => setTasks([])

  saveLocalStorage(tasks)

  return (
        <>
            <TodoMainContainer>
                <TodoInputContainer onSubmit={submit}>
                    <TodoInput placeholder='ingrese una tarea' name='todo'></TodoInput>
                    <AddButton>Añadir</AddButton>
                </TodoInputContainer>

                <TasksContainer>
                    {tasks.map((tarea) => <Tasks tarea={tarea} key={tarea}/> )}


                </TasksContainer>


                <DeleteAllContainer>
                    <DeleteAllTasksButton onClick={deleteAll}>Borrar Tareas</DeleteAllTasksButton>
                </DeleteAllContainer>
                
                
            </TodoMainContainer>


        </>
        // <div onClick={submit}>{tasks}</div>
    )
}

export default Todo