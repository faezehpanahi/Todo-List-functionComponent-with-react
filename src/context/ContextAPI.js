import { createContext } from "react";

const ContextAPI = createContext({
  todoListItems: [],
  todoListItem: "",
  showTodoList: true,
  handleShowItems: () => {},
  handleNewTask: () => {},
  setTask: () => {},
  handleChangeTodoListItem: () => {},
  handleDeleteTodoListItem: () => {},
  handleCompletedTodoListItem: () => {},
});

export default ContextAPI;
