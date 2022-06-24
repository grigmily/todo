import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {

    const {id, important, done, editing, ...itemProps} = item;
    let className = "todo-list-item";
    if (important) {
      className += ' important'
    };
    if (done) {
      className += ' done'
    };
    if (editing) {
      className += ' editing'
    };

    return (
      <li key={id} className={className}>
        <TodoListItem {...itemProps}/>
      </li>
    );
  });

  return(
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
};

export default TodoList;
