import React from "react";
import { Link } from "react-router-dom";
// import { withRouter } froms "react-router";

const Navbar = (props) => {
  console.log(props);
  return (
    <div className="m-3 ">
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item active ">
          <Link to="/" className="nav-link active">
            لیست کارهای روزانه
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            درباره طراح
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
