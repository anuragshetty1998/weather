import React from "react";
import "./Homedisplay.css";
import Homedetails from "../Homedetails/Homedetails.js";
import { AiOutlineHeart } from "react-icons/ai";
import sunny from "../../assets/sunny.png";

const Homedisplay = ({ urlData }) => {
  return (
    <div className="homedis-div">
      <div className="home-place">
        <p>{urlData.name}</p>
        <div className="addfav-div">
          <AiOutlineHeart fontSize="1.9rem" color="white" />
          <p>Add to favourite</p>
        </div>
      </div>

      <div className="home-body">
        <img src={sunny} alt="sunny" />
        <div className="home-body-sub">
          <h1>{urlData.main.temp}</h1>
          <div className="temp-button"></div>
        </div>
        <h2>{urlData.weather[0].description}</h2>
      </div>
      <Homedetails urlData={urlData} />
    </div>
  );
};

export default Homedisplay;
