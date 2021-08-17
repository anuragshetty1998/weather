import React from "react";
import "./RemoveAll.css";

const RemoveAll = ({ handleClose }) => {
  const handleRemove = () => {
    localStorage.setItem("localFav", JSON.stringify([]));
    handleClose();
    window.location.reload(true);
  };
  return (
    <div className="fav-removeall-div">
      <p>Are you sure want to remove all the favourites?</p>
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
