import React, { useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import logo from "../../assets/logo_web.png";
import ham from "../../assets/hamMenu.png";
import iconsearch from "../../assets/icon_search.png";
import clearIcon from "../../assets/clearIcon.png";
import backIcon from "../../assets/backIcon.png";
import "./Header.css";

const Header = ({ setSearchTerm, setSearchStart }) => {
  const [getSearch, setGetSearch] = useState("");
  const [menu, setMenu] = useState(false);
  const [mblSearch, setMblSearch] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const pathname = location.pathname;
  const navSelect = pathname.substring(pathname.lastIndexOf("/") + 1);
  const findSearch = () => {
    localStorage.removeItem("localCity");
    setSearchTerm(getSearch);
    setSearchStart(true);
    setGetSearch("");
    setMblSearch(false);
    history.push("/");
  };

  return (
    <>
      <div className="header-div">
        <div className="logo-ham-div">
          <img
            src={ham}
            alt="menu"
            className="ham-menu"
            onClick={() => setMenu(true)}
          />
          <img src={logo} alt="logo" className="logo" />
        </div>
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
        <img
          src={iconsearch}
          alt="seach-icon"
          className="mbl-search-icon"
          onClick={() => setMblSearch(true)}
        />
      </div>
      {menu === true ? (
        <div className="mobile-menu-div" onClick={() => setMenu(false)}>
          <div className="mobile-menu-subdiv" onClick={() => setMenu(false)}>
            <Link to="/">
              <p
                className={
                  navSelect === ""
                    ? "nav-mbl-text nav-mbl-selet"
                    : "nav-mbl-text"
                }
              >
                Home
              </p>
            </Link>
            <Link to="/favourite">
              <p
                className={
                  navSelect === "favourite"
                    ? "nav-mbl-text nav-mbl-selet"
                    : "nav-mbl-text"
                }
              >
                Favourite
              </p>
            </Link>
            <Link to="/recent-search">
              <p
                className={
                  navSelect === "recent-search"
                    ? "nav-mbl-text nav-mbl-selet"
                    : "nav-mbl-text"
                }
              >
                Recent Search
              </p>
            </Link>
          </div>
        </div>
      ) : null}
      {mblSearch === true ? (
        <div className="mbl-searcharea-div">
          <div className="mbl-searchsub-div">
            <img
              src={backIcon}
              alt="back-icon"
              onClick={() => setMblSearch(false)}
            />
            <input
              type="text"
              className="mbl-search-input"
              placeholder="Search city"
              value={getSearch}
              onChange={(event) => {
                setGetSearch(event.target.value);
              }}
              onKeyPress={(e) => e.key === "Enter" && findSearch()}
            />
            {getSearch === "" ? (
              <div className="search-extra-div"></div>
            ) : (
              <img
                src={clearIcon}
                alt="seach-icon"
                onClick={() => setGetSearch("")}
              />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
