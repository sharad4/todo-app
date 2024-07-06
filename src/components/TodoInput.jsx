import React, { useState } from 'react'

const TodoInput = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };
  return (
    <form onSubmit={handleSubmit} className='flex mb-4'>
        <input 
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            className='flex-1 p-2 border rounded'
            placeholder='Add a new task...'
        />
        <button type='submit' className='ml-2 p-2 bg-blue-500 text-white rounded'>
            Add
        </button>
    </form>
  )
}

export default TodoInput;