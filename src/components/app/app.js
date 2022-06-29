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
    type: 'All'
  };



  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.minId++
    }
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

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem,
      [propName]: !oldItem[propName]};
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx+1)
    ];
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return{
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return{
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  filterList = (typeValue) => {
    this.setState(({ type }) => {
      return{
        type: typeValue
     };
    });
  }

  render() {
    const { todoData, type } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="app-position">
        <AppHeader toDo={todoCount} done={doneCount}/>
        <SearchPanel
          onFiltered={this.filterList}
          type={type}/>
        <TodoList
          todos={todoData}
          onDeleted={(id) => this.deleteItem(id)}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          type={type}
          />
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  };
}
