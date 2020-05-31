import React, { useState, useEffect } from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import GMap from "../components/GMap";
import { Link } from "react-router-dom";
var Faker = require("faker");

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.requestPickup = this.requestPickup.bind(this);
    this.state = {
      isLoading: false
    };
  }

  requestPickup() {
    var pre = Faker.address.cityPrefix();
    var suf = Faker.address.citySuffix();
    this.setState({ isLoading: true });
    fetch(`http://localhost:5000/api/pickups/`, {
      method: "POST",
      body: JSON.stringify({
        prefix: pre,
        suffix: suf
      })
    })
      .then(response => response.json())
      .then(data => this.setState({ isLoading: false }));
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div className="Dashboard">
        <NavbarLoggedIn />
        <GMap />
        <div className="container text-center">
          <button
            className="btn btn-outline-dark mt-2 mr-2"
            onClick={() => this.requestPickup()}
          >
            Request Pickups
          </button>

          <Link to="/pickups">
            <button className="btn btn-outline-success mt-2 ml-2">
              Go To Pickups{" "}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Request;
