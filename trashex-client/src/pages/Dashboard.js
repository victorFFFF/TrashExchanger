import React, { useState, useEffect } from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import "./Dashboard.css";
import glass from "../assets/glass.png";
import metal from "../assets/metal.png";
import plastic from "../assets/plastic.png";
import axios from "axios";

const Dashboard = () => {
  const [points, setPoints] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [plasticCount, setPlasticCount] = useState(0);
  const [glassCount, setGlassCount] = useState(0);
  const [metalCount, setMetalCount] = useState(0);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const res = await axios.get("/api/current_user");
    setPoints(res.data.points);
    setTotalCount(res.data.totalCount);
  };

  const handleSave = async () => {
    const total = plasticCount + glassCount + metalCount;
    const object = {
      totalCount: total
    };
    const res = await axios("/api/current_user");
    const id = await res.data._id;
    const saveResult = await axios.put(
      `http://localhost:5000/users/${id}`,
      object
    );
    setTotalCount(saveResult.data.totalCount);
    setPlasticCount(0);
    setMetalCount(0);
    setGlassCount(0);
  };

  const handleClick = (type, operation) => {
    if (type === "plastic") {
      operation === "-" && plasticCount > 0
        ? setPlasticCount(plasticCount - 1)
        : operation === "-"
        ? setPlasticCount(0)
        : setPlasticCount(plasticCount + 1);
    } else if (type === "glass") {
      operation === "-" && glassCount > 0
        ? setGlassCount(glassCount - 1)
        : operation === "-"
        ? setGlassCount(0)
        : setGlassCount(glassCount + 1);
    } else if (type === "metal") {
      operation === "-" && metalCount > 0
        ? setMetalCount(metalCount - 1)
        : operation === "-"
        ? setMetalCount(0)
        : setMetalCount(metalCount + 1);
    }
  };

  return (
    <div className="Dashboard">
      <NavbarLoggedIn />
      <div className="container text-center pt-3">
        <div className="circle small mx-auto ">
          <h1>{points}</h1>
          <p>POINTS</p>
        </div>
        <p className="pt-3">You have 8 new awards available. Check it out!</p>
        <p className="pt-3 pb-3">Total Inventory: {totalCount}</p>
        <div className="row" style={{ height: "300px" }}>
          <div className="card col bg-primary text-white mr-2">
            <h5 className="card-title">PLASTICS</h5>
            <img src={plastic} alt="plastics" style={{ height: "210px" }} />
            <div className="row">
              <div className="col">
                <p
                  className="badge badge-pill badge-dark"
                  onClick={() => handleClick("plastic", "-")}
                >
                  -
                </p>
              </div>
              <div className="col">
                <p className="badge badge-pill badge-dark">{plasticCount}</p>
              </div>
              <div className="col">
                <p
                  className="badge badge-pill badge-dark"
                  onClick={() => handleClick("plastic", "+")}
                >
                  +
                </p>
              </div>
            </div>
          </div>
          <div className="card col bg-success text-white mr-2">
            <h5 className="card-title">GLASS</h5>
            <img src={glass} alt="glass" style={{ height: "210px" }} />
            <div className="row">
              <div className="col">
                <p
                  className="badge badge-pill badge-dark"
                  onClick={() => handleClick("glass", "-")}
                >
                  -
                </p>
              </div>
              <div className="col">
                <p className="badge badge-pill badge-dark">{glassCount}</p>
              </div>
              <div className="col">
                <p
                  className="badge badge-pill badge-dark"
                  onClick={() => handleClick("glass", "+")}
                >
                  +
                </p>
              </div>
            </div>
          </div>
          <div className="card col bg-danger text-white">
            <h5 className="card-title">METAL</h5>
            <img src={metal} alt="metal" style={{ height: "210px" }} />
            <div className="row">
              <div className="col">
                <p
                  className="badge badge-pill badge-dark"
                  onClick={() => handleClick("metal", "-")}
                >
                  -
                </p>
              </div>
              <div className="col">
                <p className="badge badge-pill badge-dark">{metalCount}</p>
              </div>
              <div className="col">
                <p
                  className="badge badge-pill badge-dark"
                  onClick={() => handleClick("metal", "+")}
                >
                  +
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <button
            className="btn btn-dark mb-5"
            style={{ width: "100%" }}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
