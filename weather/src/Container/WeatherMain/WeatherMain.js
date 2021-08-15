import React, { useState } from "react";
import Header from "../../Components/Header/Header.js";
import Navbar from "../../Components/Navbar/Navbar.js";
import Routing from "../../Route/Route.js";

const WeatherMain = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [searchStart, setSearchStart] = useState(false);

  return (
    <>
      <Header setSearchTerm={setSearchTerm} setSearchStart={setSearchStart} />
      <Navbar />
      <Routing searchTerm={searchTerm} searchStart={searchStart} />
    </>
  );
};

export default WeatherMain;
