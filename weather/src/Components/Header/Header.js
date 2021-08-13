import React from "react";
import logo from "../../assets/logo_web.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-div">
      <img src={logo} alt="logo" className="logo" />
      <div className="search-div">hi</div>
    </div>
  );
};

export default Header;
