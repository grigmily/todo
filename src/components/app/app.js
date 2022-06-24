import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import NewTaskForm from '../new-task-form';
import './app.css';

const App = () => {

  const todoData = [
    {label: "Drink Coffee", important: false, done: true, editing: false, id: 1},
    {label: "Make Awesome App", important: true, done: false, editing: false, id: 2},
    {label: "Have a lunch", important: false, done: false, editing: false, id: 3}
  ];
  const count = {toDo: 1, done: 2};
  const {toDo, done} = count;
  return (
    <div className="app-position">
      <AppHeader toDo={toDo} done={done}/>
      <SearchPanel/>
      <TodoList todos={todoData} />
      <NewTaskForm/>
    </div>
  );
};

export default App;
