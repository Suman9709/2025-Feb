import React, { useState } from 'react'

const ToDo = ({ taskname, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTaskName, setNewTaskName] = useState(taskname)

    const handleSaveEdit = () => {
        if (newTaskName.trim() !== ' ') {
            onEdit(taskname, newTaskName);
            setIsEditing(false);
        }
    }

    return (
        <>
            <li className='border-2 border-white p-2 text-lg text-white w-full'>
                {isEditing ? (
                    <input type="text"
                        value={newTaskName}
                        onChange={(e) => setNewTaskName(e.target.value)}
                        className='text-white p-1 border-gray-300'
                    />
                ) : (
                    <span>{taskname}</span>
                )}

                <div>

                    {
                        isEditing ? (
                            <button onClick={handleSaveEdit} className="bg-green-500 px-2 ml-2">✔</button>
                        ) : (
                            <button onClick={() => setIsEditing(true)} className="bg-blue-500 px-2 ml-2">✏️</button>
                        )
                    }
                    <button onClick={() => onDelete(taskname)} className="bg-red-500 px-2 ml-2">×</button>
                </div>

            </li>
        </>
    )
}

export default ToDo