import React, { useState } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import "./app.css";

export default function App() {
  const [minId, setMinID] = useState(100);

  const createTodoItem = (label) => {
    setMinID(minId + 1);
    return {
      label: label,
      important: false,
      done: false,
      id: minId + 1,
      dateCreatedAt: new Date(),
    };
  };

  const [todoData, setTodoData] = useState([
    createTodoItem("Drink Coffee"),
    createTodoItem("Make Awesome App"),
    createTodoItem("Have a lunch"),
  ]);

  const [filterType, setFilterType] = useState("All");
  const [search, setSearch] = useState("");

  const deleteItem = (id) => {
    setTodoData(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  const addItem = (text) => {
    const newItem = createTodoItem(text);

    setTodoData(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  const toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  const onToggleDone = (id) => {
    setTodoData(({ todoData }) => {
      return {
        todoData: toggleProperty(todoData, id, "done"),
      };
    });
  };

  const onToggleImportant = (id) => {
    setTodoData(({ todoData }) => {
      return {
        todoData: toggleProperty(todoData, id, "important"),
      };
    });
  };

  const filterList = (typeValue) => {
    setFilterType(typeValue);
  };

  const handleChange = (searchValue) => {
    setSearch(searchValue);
  };

  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;

  return (
    <div className="app-position">
      <AppHeader toDo={todoCount} done={doneCount} />
      <SearchPanel
        onFiltered={filterList}
        filterType={filterType}
        searchValue={search}
        onChange={handleChange}
      />
      <TodoList
        todos={todoData}
        onDeleted={(id) => deleteItem(id)}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
        filterType={filterType}
        searchValue={search}
      />
      <ItemAddForm onItemAdded={addItem} />
    </div>
  );
}
