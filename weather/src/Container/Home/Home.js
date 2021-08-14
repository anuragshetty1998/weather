import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header.js";
import Navbar from "../../Components/Navbar/Navbar.js";
import Homedisplay from "../../Components/Homedisplay/Homedisplay.js";
import "./Home.css";

const Homedissplay = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [urlData, setUrlData] = useState();
  //const [unit, setUnit] = useState("metric");
  const key = "cd112e31e2ac490e860d34730870afac";
  const url = "https://api.openweathermap.org/data/2.5/weather?";

  useEffect(() => {
    fetchLocation();
  }, [latitude, longitude]);

  const saveLocation = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const fetchLocation = async () => {
    await window.navigator.geolocation.getCurrentPosition(saveLocation);
    if (longitude !== 0 && latitude !== 0)
      await axios
        .get(url + `lat=${latitude}&lon=${longitude}&units=metric&APPID=${key}`)
        .then((response) => {
          setUrlData(response.data);
        })
        .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <Navbar />
      {urlData && <Homedisplay urlData={urlData} />}
    </>
  );
};

export default Homedissplay;
