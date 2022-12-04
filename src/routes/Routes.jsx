import React from 'react'
import Home from '../pages/Home'
import Todo from '../pages/Todo'
import Pokemon from '../pages/Pokemon'
import { Route, Routes as ReactRoutes } from 'react-router-dom'

const Routes = () => {
  return (
    <>
        <ReactRoutes>
            <Route path='/' element={<Home/>} />
            <Route path='/Todo' element={<Todo/>} />
            <Route path='/Pokemon' element={<Pokemon/>} />

        </ReactRoutes>
    </>
  )
}

export default Routes