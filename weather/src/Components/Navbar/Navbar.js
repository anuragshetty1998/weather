import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import moment from "moment";
import "./Navbar.css";

const Navbar = () => {
  const [time, setTime] = useState(
    moment().format("ddd, D MMM YYYY   hh:mm A")
  );
  const location = useLocation();
  const pathname = location.pathname;
  const navSelect = pathname.substring(pathname.lastIndexOf("/") + 1);

  setInterval(() => {
    setTime(moment().format("ddd, D MMM YYYY    hh:mm A"));
  }, 1000);

  console.log(moment().format("ddd, D MMM YYYY    hh:mm A"));
  return (
    <div className="navbar-div">
      <div className="nav-subdiv">
        <Link to="/home">
          <p
            className={navSelect === "home" ? "nav-text nav-selet" : "nav-text"}
          >
            Home
          </p>
        </Link>
        <Link to="/favourite">
          <p
            className={
              navSelect === "favourite" ? "nav-text nav-selet" : "nav-text"
            }
          >
            Favourite
          </p>
        </Link>
        <Link to="/recent-search">
          <p
            className={
              navSelect === "recent-search" ? "nav-text nav-selet" : "nav-text"
            }
          >
            Recent Search
          </p>
        </Link>
      </div>
      <p className="nav-date">{time}</p>
    </div>
  );
};

export default Navbar;
