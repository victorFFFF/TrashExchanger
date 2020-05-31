import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NavbarLoggedIn = () => {
  const [userFullName, setUserFullName] = useState("");

  useEffect(() => {
    fetchUser();
  });

  const fetchUser = async () => {
    const res = await axios.get("/api/current_user");
    setUserFullName(res.data.name);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <p className="">Welcome, {userFullName}</p>
      <div className="navbar-collapse collapse" id="collapsingNavbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/request"
              className="btn btn-outline-dark my-2 my-sm-0 mr-2">
              Schedule Your Pickup
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="btn btn-outline-dark my-2 my-sm-0"
              href="/api/logout"
            >
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarLoggedIn;
