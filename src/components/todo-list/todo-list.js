import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';
import PropTypes from 'prop-types';

let minId = 100;

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

TodoList.defaultProps = {
  todos: [
    {
      label: "No Tasks",
      important: false,
      done: false,
      id: minId++,
      dateCreatedAt: new Date()
    }
  ],
  onDeleted: ()=>{},
  onToggleImportant: ()=>{},
  onToggleDone: ()=>{},
  filterType: 'All',
  searchValue: ''
};

TodoList.propTypes = {
  todos: PropTypes.array,
  onDeleted: PropTypes.func,
  onToggleImportant: PropTypes.func,
  onToggleDone: PropTypes.func,
  filterType: PropTypes.oneOf(['All','Done','Active']),
  searchValue: PropTypes.string
};

export default TodoList;
