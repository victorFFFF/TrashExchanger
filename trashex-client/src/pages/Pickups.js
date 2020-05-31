import React, {useState, useEffect} from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";

class Pickups extends React.Component {
  constructor(props) {
    super(props);
    this.completePickup = this.completePickup.bind(this);
    this.state = {
      pickups: [],
      isLoading: false,
    };
  }

  completePickup(e) {
    this.setState({ isLoading: true });
    fetch(`http://localhost:5000/api/pickups/delete/${e.pickup._id}`, {
      method: 'DELETE'
    })
      .then(() => {
        fetch("http://localhost:5000/api/pickups")
        .then(response => response.json())
        .then(data => this.setState({ pickups: data, isLoading: false }));
      })
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:5000/api/pickups")
      .then(response => response.json())
      .then(data => this.setState({ pickups: data, isLoading: false }));
  }

  render() {
    const { pickups, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div className="Dashboard">
        <NavbarLoggedIn />
        <div className="container text-center pt-3">
          <div className="table table-striped table-dark">
            {pickups.map(pickup =>
              <div style={{borderBottom:"1px solid gray", height: "50px"}} onClick={() => this.completePickup({pickup})}>
                {pickup.name}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default Pickups;
