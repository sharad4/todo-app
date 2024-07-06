import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo, setDueDate, setReminder }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [dueDate, setNewDueDate] = useState(todo.dueDate ? new Date(todo.dueDate) : null);
  const [reminder, setNewReminder] = useState(todo.reminder ? new Date(todo.reminder) : null);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      editTodo(todo.id, newText);
      setDueDate(todo.id, dueDate);
      setReminder(todo.id, reminder);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex flex-col p-4 border-b bg-gray-100 rounded-lg mb-2 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            className="mr-2"
          />
          {isEditing ? (
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="flex-1 p-2 border rounded"
            />
          ) : (
            <span className={`text-lg ${todo.completed ? 'line-through' : ''}`}>
              {todo.text}
            </span>
          )}
        </div>
        <div>
          <button onClick={handleEdit} className="mr-2 text-blue-500 hover:underline">
            {isEditing ? 'Save' : 'Edit'}
          </button>
          <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:underline">
            Delete
          </button>
        </div>
      </div>
      {isEditing && (
        <div className="flex justify-between">
          <div>
            <label className="block text-sm">Due Date:</label>
            <DatePicker selected={dueDate} onChange={(date) => setNewDueDate(date)} className="p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm">Reminder:</label>
            <DatePicker selected={reminder} onChange={(date) => setNewReminder(date)} className="p-2 border rounded" showTimeSelect dateFormat="Pp" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
