import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({
  todos,
  onDeleted,
  onToggleImportant,
  onToggleDone,
  filterType,
  searchValue
  }) => {
  let todosFiltered = [];
  switch (filterType) {
    case 'All':
      todosFiltered = todos.filter((el) => el.label.toLowerCase().includes(searchValue.toLowerCase()));
      break;
    case 'Active':
      todosFiltered = todos.filter((el) => !el.done);
      break;
    case 'Done':
      todosFiltered = todos.filter((el) => el.done);
      break;
    default:
      todosFiltered = todos.filter((el) => el.label.includes(searchValue));
  }

  const elements = todosFiltered.map((item) => {

    const {id, ...itemProps} = item;
    let className = "todo-list-item";

    return (
      <li key={id} className={className}>
        <TodoListItem
          {...itemProps}
          onDeleted = {() => onDeleted(id)}
          onToggleImportant = {() => onToggleImportant(id)}
          onToggleDone = {() => onToggleDone(id)}
          />
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
