import React, { useState } from 'react'
import ToDoform from './Components/ToDoform'
import ToDoList from './Components/ToDoList'

function App() {

  return (
    <div className='main flex flex-col bg-gray-600 w-screen h-screen justify-center items-center'>
      <h1 className='text-white text-xl'>ToDo List</h1>
    <ToDoform />
    </div>
  )
}

export default App
