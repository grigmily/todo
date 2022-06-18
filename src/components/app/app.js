import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import NewTaskForm from '../new-task-form';
import './app.css';

const App = () => {

  const todoData = [
    {label: "Drink Coffee", important: false, done: true, id: 1},
    {label: "Make Awesome App", important: true, done: false, id: 2},
    {label: "Have a lunch", important: false, done: false, id: 3}
  ];
  return (
    <div className="app-position">
      <AppHeader/>
      <SearchPanel/>
      <TodoList todos={todoData} />
      <NewTaskForm/>
    </div>
  );
};

export default App;
