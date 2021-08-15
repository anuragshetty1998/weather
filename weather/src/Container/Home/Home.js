import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header.js";
import Navbar from "../../Components/Navbar/Navbar.js";
import Homedisplay from "../../Components/Homedisplay/Homedisplay.js";
import "./Home.css";

const Home = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [urlData, setUrlData] = useState();
  const [tempUnit, setTempUnit] = useState("metric");
  const [searchTerm, setSearchTerm] = useState();
  const [searchStart, setSearchStart] = useState(false);
  const key = "cd112e31e2ac490e860d34730870afac";
  const url = "https://api.openweathermap.org/data/2.5/weather?";

  useEffect(() => {
    if (!searchStart) {
      fetchLocation();
    }
  }, [latitude, longitude, tempUnit]);

  useEffect(() => {
    if (searchStart) {
      getCityWeather();
    }
  }, [searchStart, tempUnit, searchTerm]);

  const saveLocation = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const fetchLocation = async () => {
    await window.navigator.geolocation.getCurrentPosition(saveLocation);
    if (longitude !== 0 && latitude !== 0)
      await axios
        .get(
          url +
            `lat=${latitude}&lon=${longitude}&units=${tempUnit}&APPID=${key}`
        )
        .then((response) => {
          setUrlData(response.data);
        })
        .catch((err) => console.log(err));
  };

  const getCityWeather = async () => {
    await axios
      .get(url + `q=${searchTerm}&units=${tempUnit}&APPID=${key}`)
      .then((response) => {
        setUrlData(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header setSearchTerm={setSearchTerm} setSearchStart={setSearchStart} />
      <Navbar />
      {urlData && <Homedisplay urlData={urlData} setTempUnit={setTempUnit} />}
    </>
  );
};

export default Home;
