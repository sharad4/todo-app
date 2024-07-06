import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TodoItem from './TodoItem';
import './transitions.css'; // Import the CSS for transitions

const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo, setDueDate, setReminder }) => {
  return (
    <div>
      {todos.length > 0 ? (
        <TransitionGroup>
          {todos.map(todo => (
            <CSSTransition key={todo.id} timeout={300} classNames="todo">
              <TodoItem
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                setDueDate={setDueDate}
                setReminder={setReminder}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <p className="text-center text-gray-500">No todos available.</p>
      )}
    </div>
  );
};

export default TodoList;
