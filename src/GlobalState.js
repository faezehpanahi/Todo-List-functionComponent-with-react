import React, { useState } from "react";
import ContextAPI from "./context/ContextAPI";

const GlobalState = (props) => {
  const [getTodoListItems, setTodoListItems] = useState([]);
  const [getTodoListItem, setTodoListItem] = useState("");
  const [getShowTodoList, setShowTodoList] = useState(true);

  const handleShowItems = () => {
    setShowTodoList(!getShowTodoList);
  };

  const handleNewTask = () => {
    const todoListItems = [...getTodoListItems];
    const todoListItem = {
      id: Math.floor(Math.random() * 1000),
      task: getTodoListItem,
      completeItem: false,
    };

    if (getTodoListItem !== "" && getTodoListItem !== " ") {
      todoListItems.push(todoListItem);
      setTodoListItems(todoListItems);
      setTodoListItem("");
    }
  };

  const setTask = (event) => {
    setTodoListItem(event.target.value);
  };

  const handleChangeTodoListItem = (event, id) => {
    const todoListItems = getTodoListItems;
    const indexItem = todoListItems.findIndex((index) => index.id === id);
    const todoItem = todoListItems[indexItem];
    todoItem.task = event.target.value;
    const items = [...todoListItems];
    items[indexItem] = todoItem;
    setTodoListItems(items);
  };

  const handleDeleteTodoListItem = (id) => {
    const todoListItems = [...getTodoListItems];
    const filterListItems = todoListItems.filter((item) => id !== item.id);
    setTodoListItems(filterListItems);
  };

  const handleCompletedTodoListItem = (id) => {
    const todoItems = [...getTodoListItems];
    const indexTodoItem = todoItems.findIndex((index) => index.id === id);
    const todoItem = todoItems[indexTodoItem];
    todoItem.completeItem = !todoItem.completeItem;
    todoItems[indexTodoItem] = todoItem;
    setTodoListItems(todoItems);
  };

  return (
    <ContextAPI.Provider
      value={{
        todoListItems: getTodoListItems,
        todoListItem: getTodoListItem,
        showTodoList: getShowTodoList,
        handleShowItems: handleShowItems,
        handleNewTask: handleNewTask,
        setTask: setTask,
        handleChangeTodoListItem: handleChangeTodoListItem,
        handleDeleteTodoListItem: handleDeleteTodoListItem,
        handleCompletedTodoListItem: handleCompletedTodoListItem,
      }}
    >
      {props.children}
    </ContextAPI.Provider>
  );
};

export default GlobalState;
