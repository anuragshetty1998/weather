import React, { useState, useEffect } from "react";
import "./Homedisplay.css";
import Homedetails from "../Homedetails/Homedetails.js";
//import sunny from "../../assets/sunny.png";
import favheart from "../../assets/favheart.png";
import notfavheart from "../../assets/notfavheart.png";
import { SelectIcon } from "../../Services/SelectIcon";

const Homedisplay = ({ urlData, setTempUnit }) => {
  const [unit, setUnit] = useState("metric");
  const [favIcon, setFavIcon] = useState("notfav");
  const [favList, setFavList] = useState(() => {
    let list = localStorage.getItem("localFav");
    if (list) {
      return JSON.parse(localStorage.getItem("localFav"));
    } else {
      return [];
    }
  });

  let city = urlData.name;
  useEffect(() => {
    setTempUnit(unit);
  }, [unit]);

  //console.log("city", city);

  useEffect(() => {
    if (favList.some((element) => element.city === city)) {
      setFavIcon("fav");
    } else {
      setFavIcon("notfav");
    }
  }, [favIcon, urlData]);

  // console.log(favList);

  const handleFavClick = () => {
    if (favIcon === "fav") {
      setFavIcon("notfav");
      setFavList(
        favList.filter((element) => {
          if (element["city"] !== city) return element;
          else return null;
        })
      );
    } else {
      setFavList([
        ...favList,
        {
          city: city,
          country: urlData.sys.country,
          id: urlData.weather[0].id,
          temp: urlData.main.temp,
          description: urlData.weather[0].description,
        },
      ]);
      setFavIcon("fav");
    }
  };

  useEffect(() => {
    localStorage.setItem("localFav", JSON.stringify(favList));
  }, [city, favIcon]);

  return (
    <div className="homedis-div">
      <div className="home-place">
        <p>{`${urlData.name}, ${urlData.sys.country}`}</p>
        <div className="addfav-div">
          {
            <img
              src={favIcon === "fav" ? favheart : notfavheart}
              alt="fav"
              onClick={handleFavClick}
            />
          }

          <p>Add to favourite</p>
        </div>
      </div>
      <div className="home-body">
        <img
          src={`/assets/${SelectIcon(urlData.weather[0].id)}.png`}
          alt="icon"
        />
        <div className="home-body-sub">
          <h1>{urlData.main.temp}</h1>
          <div className="temp-button">
            <div
              className={unit === "metric" ? " btn-notselect" : "btn-select"}
              onClick={() => setUnit("metric")}
            >
              °C
            </div>
            <div
              className={unit === "imperial" ? " btn-notselect" : " btn-select"}
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
