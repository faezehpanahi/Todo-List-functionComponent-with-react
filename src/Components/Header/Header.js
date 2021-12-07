import React, { useContext } from "react";
import ContextAPI from "../../context/ContextAPI";

const Header = ({ title }) => {
  const context = useContext(ContextAPI);
  const { todoListItems } = context;

  let badgeStyle;
  if (todoListItems.length <= 1) {
    badgeStyle = "badge-danger";
  }
  if (todoListItems.length >= 2) {
    badgeStyle = "badge-warning";
  }
  if (todoListItems.length >= 3) {
    badgeStyle = "badge-success";
  }

  return (
    <div>
      <div className="alert alert-info">
        <h1 className="text-dark m-3">{title}</h1>
      </div>
      <h3 className="text-secondary m-5">
        تعداد کارهایی که باید امروز انجام شود{" "}
        <span className={`badge badge-pill ${badgeStyle}`}>
          {todoListItems.length}
        </span>{" "}
        تا است.
      </h3>
    </div>
  );
};

export default Header;
