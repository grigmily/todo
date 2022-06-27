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
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch")
    ],
    toDo: 1,
    done: 2
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.minId++
    }
  }

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

    const newItem = this.createTodoItem(text);

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



  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      
    });
  };

  onToggleImportant = (id) => {
    console.log('Toggle Important: ', id);
  };

  render() {
    return (
      <div className="app-position">
        <AppHeader toDo={this.state.toDo} done={this.state.done}/>
        <SearchPanel/>
        <TodoList
          todos={this.state.todoData}
          onDeleted={(id) => this.deleteItem(id)}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          />
        <NewTaskForm/>
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  };
}
