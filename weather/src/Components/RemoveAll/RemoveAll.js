import React from "react";
import { useLocation } from "react-router-dom";
import "./RemoveAll.css";

const RemoveAll = ({ handleClose }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const navSelect = pathname.substring(pathname.lastIndexOf("/") + 1);

  const handleRemove = () => {
    navSelect === "favourite"
      ? localStorage.setItem("localFav", JSON.stringify([]))
      : localStorage.setItem("localRecent", JSON.stringify([]));
    handleClose();
    window.location.reload(true);
  };
  return (
    <div className="fav-removeall-div">
      {navSelect === "favourite" ? (
        <p>Are you sure want to remove all the favourites?</p>
      ) : (
        <p>Are you sure want to clear all recent search?</p>
      )}

      <div className="removeall-btm-div">
        <div className="remove-no-btn" onClick={handleClose}>
          NO
        </div>
        <div className="remove-no-btn" onClick={handleRemove}>
          YES
        </div>
      </div>
    </div>
  );
};

export default RemoveAll;
