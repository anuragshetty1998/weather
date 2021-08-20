import React from "react";
import wind from "../../assets/wind.png";
import preception from "../../assets/preception.png";
import temparature from "../../assets/temparature.png";
import visibility from "../../assets/visibility.png";
import humidity from "../../assets/humidity.png";
import "./Homedetails.css";

const Homedetails = ({ urlData, unit }) => {
  const windSpeed =
    unit === "imperial"
      ? urlData.wind.speed
      : parseFloat(urlData.wind.speed * 2.237).toFixed(2);
  const Details = [
    {
      title: "Min - Max",
      value: `${urlData.main.temp_min}°- ${urlData.main.temp_max}°`,
      image: temparature,
    },
    {
      title: "Preception",
      value: `0%`,
      image: Precipitation,
    },
    {
      title: "Humidity",
      value: `${urlData.main.humidity}%`,
      image: humidity,
    },
    {
      title: "Wind",
      value: `${windSpeed}mph`,
      image: wind,
    },
    {
      title: "Visibility",
      value: `${urlData.visibility}m`,
      image: visibility,
    },
  ];

  return (
    <div className="homedetails-div">
      {Details.map((ele, index) => (
        <div className="details-subdiv" key={index}>
          <img src={ele.image} alt="weather-icon" />
          <div className="details-subdiv2">
            <p className="details-title">{ele.title}</p>
            <p className="details-value">{ele.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homedetails;
