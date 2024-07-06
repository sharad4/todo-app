import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Filter from './components/Filter';
import Auth from './components/Auth';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      todos.forEach(todo => {
        if (todo.reminder && new Date(todo.reminder) <= now) {
          alert(`Reminder: ${todo.text}`);
        }
      });
    };
    const interval = setInterval(checkReminders, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [todos]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // Fetch todos from Firebase if you want to use cloud storage
      } else {
        setUser(null);
        // Clear todos if user signs out
      }
    });

    return () => unsubscribe();
  }, []);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      dueDate: null,
      reminder: null,
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

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, text: newText } : todo
    )));
  };

  const setDueDate = (id, date) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, dueDate: date } : todo
    )));
  };

  const setReminder = (id, date) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, reminder: date } : todo
    )));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-center">Advanced To-Do App</h1>
      <Auth user={user} setUser={setUser} />
      {user && (
        <>
          <TodoInput addTodo={addTodo} />
          <Filter filter={filter} setFilter={setFilter} />
          <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} setDueDate={setDueDate} setReminder={setReminder} />
        </>
      )}
    </div>
  );
};

export default App;
