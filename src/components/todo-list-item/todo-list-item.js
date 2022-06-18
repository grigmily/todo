import React from 'react';
import './todo-list-item.css'

const TodoListItem = ({ label, important=false, done=false}) => {
  let className = "todo-list-item";
  if (important) {
    className += ' important'
  };
  if (done) {
    className += ' done'
  };
  return (
    <span
      className={className}>
        <span
          className="todo-list-item-label">
            { label }
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm">
            <i className="fa fa-exclamation"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm">
          <i class="fa fa-trash-can"></i>
        </button>
    </span>
  )
};

export default TodoListItem;
