import React, { useState, useEffect } from "react";
import axios from "axios";
import Homedisplay from "../../Components/Homedisplay/Homedisplay.js";
import { url, key } from "../../Services/Api";
import "./Home.css";

const Home = ({ searchTerm, searchStart }) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [urlData, setUrlData] = useState();
  const [local, setLocal] = useState(localStorage.getItem("localCity"));
  const [tempUnit, setTempUnit] = useState("metric");

  useEffect(() => {
    if (!searchStart && !localStorage.getItem("localCity")) {
      fetchLocation();
    }
  }, [latitude, longitude, tempUnit]);

  useEffect(() => {
    if (searchStart && !localStorage.getItem("localCity")) {
      getCityWeather();
      console.log("no", local);
    }
    if (local) {
      getLocalCity();
      console.log("yes", local);
    }
  }, [searchStart, tempUnit, searchTerm, local]);

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

  const getLocalCity = async () => {
    await axios
      .get(
        url +
          `q=${localStorage.getItem(
            "localCity"
          )}&units=${tempUnit}&APPID=${key}`
      )
      .then((response) => {
        setUrlData(response.data);
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   setLocal(localStorage.getItem("localCity"));
  //   if (local) {
  //     if (localStorage.getItem("localCity")) {
  //       getLocalCity();
  //     }
  //   }
  // }, [local]);

  return (
    <>
      {urlData && <Homedisplay urlData={urlData} setTempUnit={setTempUnit} />}
    </>
  );
};

export default Home;
