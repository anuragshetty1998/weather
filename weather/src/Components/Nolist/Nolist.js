import React from "react";
import empty from "../../assets/nothing.png";
import { useLocation } from "react-router-dom";
import "./Nolist.css";

const NoList = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const navSelect = pathname.substring(pathname.lastIndexOf("/") + 1);
  let text =
    navSelect === "favourite" ? "No Favourites added" : "No Recent Search";

  return (
    <div className="nolist-div">
      <img src={empty} alt="Not-found" />
      <p>{text}</p>
    </div>
  );
};

export default NoList;
