import { useState } from 'react'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput';
import Filter from './components/Filter';


function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filterTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
  });

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Advanced To-Do App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
