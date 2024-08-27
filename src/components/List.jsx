import React from 'react';
import ToDoItem from './ToDoItem';

function List({ todos, toggleComplete, deleteTodo }) {
  return (
    <div className="list-container">
      {todos.length === 0 ? (
        <p>No todos yet</p>
      ) : (
        todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
}

export default List;
