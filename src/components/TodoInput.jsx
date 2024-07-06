import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        aria-label="New todo"
        className="flex-1 p-2 border rounded-l"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-r">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
