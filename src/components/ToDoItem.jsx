import React from 'react';

function ToDoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className="todo-item">
      <span
        className={todo.completed ? 'completed' : ''}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.title}
      </span>
      <button onClick={() => toggleComplete(todo.id)} className="complete-button">
        {todo.completed ? 'Cancel' : 'Complete'}
      </button>
      <button onClick={() => deleteTodo(todo.id)} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default ToDoItem;
