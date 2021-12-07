import React, { useContext } from "react";
import ContextAPI from "../../context/ContextAPI";

const ShowTodoItems = () => {
  const context = useContext(ContextAPI);
  return (
    <div>
      <button
        className={
          context.showTodoList
            ? "btn btn-lg m-3 text-light btn-warning"
            : "btn btn-lg m-3 text-light btn-danger"
        }
        onClick={() => context.handleShowItems()}
      >
        نمایش لیست کارهای روزانه
      </button>
    </div>
  );
};

export default ShowTodoItems;
