import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <i className="fas fa-recycle mr-2" style={{ color: "white" }}></i>
      <Link to="/" className="navbar-brand">
        The Trash Exchange
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        dataToggle="collapse"
        dataTarget="#collapsingNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="collapsingNavbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="btn btn-outline-success my-2 my-sm-0" href="/auth/google">
              Log In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
