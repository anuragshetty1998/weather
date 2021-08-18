import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo_web.png";
import iconsearch from "../../assets/icon_search.png";
import "./Header.css";

const Header = ({ setSearchTerm, setSearchStart }) => {
  const [getSearch, setGetSearch] = useState("");
  const history = useHistory();
  const findSearch = () => {
    localStorage.removeItem("localCity");
    setSearchTerm(getSearch);
    setSearchStart(true);
    setGetSearch("");
    history.push("/");
  };
  return (
    <div className="header-div">
      <img src={logo} alt="logo" className="logo" />

      <div className="search-div">
        <input
          type="text"
          className="search-input"
          placeholder="Search city"
          value={getSearch}
          onChange={(event) => {
            setGetSearch(event.target.value);
          }}
        />
        <img src={iconsearch} alt="seach-icon" onClick={() => findSearch()} />
      </div>
    </div>
  );
};

export default Header;
