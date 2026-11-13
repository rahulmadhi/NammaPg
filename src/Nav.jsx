import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="logoblock">NAMMA PG</div>
      <div className="menublock">
        <Link to={"/adminlogin"}>ADMIN</Link>
        <Link to={"/userlogin"}>USER</Link>
      </div>
    </div>
  );
};

export default Nav;
