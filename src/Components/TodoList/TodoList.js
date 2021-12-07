import React, { useContext } from "react";
import ContextAPI from "../../context/ContextAPI";
import Todo from "./Todo";

const TodoList = () => {
  const context = useContext(ContextAPI);
  const {
    todoListItems,
    handleDeleteTodoListItem,
    handleCompletedTodoListItem,
    handleChangeTodoListItem,
  } = context;

  return (
    <div>
      {todoListItems.map((item) => {
        return (
          <Todo
            todoItem={item.task}
            key={item.id}
            isCompleted={item.completeItem}
            deleteTodoItem={() => handleDeleteTodoListItem(item.id)}
            completedTodoItem={() => handleCompletedTodoListItem(item.id)}
            changeTodoItem={(event) => handleChangeTodoListItem(event, item.id)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
