import React from "react";

const Todo = ({
  todoItem,
  isCompleted,
  deleteTodoItem,
  completedTodoItem,
  changeTodoItem,
}) => {
  return (
    <div className="card border-info rounded-lg w-25 mt-3 mb-3 mx-auto p-3 bg-info">
      <div className="d-flex">
        <p className="text-left w-75  mt-2 mb-2 mx-auto text-dark h4">
          {isCompleted ? <del>{todoItem}</del> : todoItem}
        </p>

        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary btn-lg fa fa-check-square "
            onClick={completedTodoItem}
          />
          <button
            type="button"
            className="btn btn-danger btn-lg fa fa-trash"
            onClick={deleteTodoItem}
          />
        </div>
      </div>
      <input
        type="text"
        placeholder={todoItem}
        onChange={changeTodoItem}
        className="text-left border-0 w-75 rounded mt-2 mb-2 mx-auto"
      />
    </div>
  );
};

export default Todo;
