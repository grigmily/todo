import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import NewTaskForm from '../new-task-form';
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends Component {

  minId = 100;

  state = {
    todoData: [
      {label: "Drink Coffee", important: false, done: true, editing: false, id: 1},
      {label: "Make Awesome App", important: true, done: false, editing: false, id: 2},
      {label: "Have a lunch", important: false, done: false, editing: false, id: 3}
    ],
    toDo: 1,
    done: 2
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
        const idx = todoData.findIndex((el) => el.id === id);
        const newArray = [
          ...todoData.slice(0,idx),
          ...todoData.slice(idx + 1)
          ];
        return {
          todoData: newArray
        }
      }
    )
  };

  addItem = (text) => {

    const newItem = {
      label: text,
      important: false,
      editing: false,
      id: this.minId++
    }

    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ];
      return {
        todoData: newArr
      }
    });

  };
  render() {
    return (
      <div className="app-position">
        <AppHeader toDo={this.state.toDo} done={this.state.done}/>
        <SearchPanel/>
        <TodoList
          todos={this.state.todoData}
          onDeleted={(id) => this.deleteItem(id)}/>
        <NewTaskForm/>
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  };
}
