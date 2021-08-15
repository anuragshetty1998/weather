import React, { useState, useEffect } from "react";
import "./Homedisplay.css";
import Homedetails from "../Homedetails/Homedetails.js";
import { AiOutlineHeart } from "react-icons/ai";
import sunny from "../../assets/sunny.png";

const Homedisplay = ({ urlData, setTempUnit }) => {
  const [unit, setUnit] = useState("metric");
  useEffect(() => {
    setTempUnit(unit);
  }, [unit]);

  return (
    <div className="homedis-div">
      <div className="home-place">
        <p>{`${urlData.name}, ${urlData.sys.country}`}</p>
        <div className="addfav-div">
          <AiOutlineHeart fontSize="1.9rem" color="white" />
          <p>Add to favourite</p>
        </div>
      </div>

      <div className="home-body">
        <img src={sunny} alt="sunny" />
        <div className="home-body-sub">
          <h1>{urlData.main.temp}</h1>
          <div className="temp-button">
            <div
              className={unit === "metric" ? " btn-select" : "btn-notselect"}
              onClick={() => setUnit("metric")}
            >
              °C
            </div>
            <div
              className={unit === "imperial" ? " btn-select" : " btn-notselect"}
              onClick={() => setUnit("imperial")}
            >
              °F
            </div>
          </div>
        </div>
        <h2>{urlData.weather[0].description}</h2>
      </div>
      <Homedetails urlData={urlData} unit={unit} />
    </div>
  );
};

export default Homedisplay;
