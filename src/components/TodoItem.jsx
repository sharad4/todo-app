import React from 'react'

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className='flex justify-between items-center p-4 border-b'>
        <div className="flex items-center">
            <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className='mr-2'
            />
            <span className={`mr-2 text-lg ${todo.completed ? 'line-through' : ''}`}>
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className='text-red-500'>
                Delete
            </button>
        </div>
    </div>
  )
}

export default TodoItem