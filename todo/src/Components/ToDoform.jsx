import React, { useState } from 'react'
import { Button } from '@mui/material';
import ToDoList from './ToDoList';
const ToDoform = () => {


  const [task, setTask] = useState([])


  const handlesubmit = (e) => {
    // it saves the form but stop to reload page
    const toname = e.target.toname.value; // input jiski value uthani h
    if (toname === " ")
      return;
    if (!task.includes(toname)) {
      setTask([...task, toname]) // old and new task
      e.target.reset() // clear input filed after submission
    }
    else {
      alert("Task already exist....")
    }
    e.preventDefault();
  }

  const handledelete = (tasktoDelete) => {
    setTask(task.filter((t) => t !== tasktoDelete));
  };

  const handleEdit = (oldTask, newTask) => {
    if (newTask.trim() === ' ') return
    setTask(task.map((t) => (t === oldTask ? newTask : t)))
    /*
    if(t===oldtask){
    return newTask
    }
    else{
    return t;
    }
    */
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label htmlFor="Task" className='text-white'>Task</label>
        <input
          type="text"
          name="toname"
          className='border-black border-2 p-1 text-lg text-white m-2'
        />

        <Button type='submit' >Add+</Button>
      </form>
      <ToDoList list={task} onDelete={handledelete} onEdit={handleEdit} />
    </div>
  )
}

export default ToDoform