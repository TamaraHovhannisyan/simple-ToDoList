import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="app-container">
      <h1>ToDo List</h1>
      <ToDoList />
    </div>
  );
}

export default App;
