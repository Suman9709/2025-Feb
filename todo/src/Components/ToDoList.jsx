import React from 'react'
import ToDo from './ToDo'
const ToDoList = ({list, onDelete, onEdit}) => {

   
      return (
       <>
      <ul>
     {list.map((taskname, index)=>(
      <ToDo key={index} taskname={taskname} onDelete={onDelete} onEdit={onEdit} />
     ))}
      </ul>

       </>
        
    )
}

export default ToDoList