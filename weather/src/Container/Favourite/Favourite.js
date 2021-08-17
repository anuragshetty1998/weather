import React, { useState, useEffect } from "react";
import favheart from "../../assets/favheart.png";
import { SelectIcon } from "../../Services/SelectIcon";
import NoList from "../../Components/Nolist/Nolist";
import RemoveAll from "../../Components/RemoveAll/RemoveAll";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./Favourite.css";

const Favourite = () => {
  const [open, setOpen] = useState(false);
  const [favList, setFavList] = useState(() => {
    let list = localStorage.getItem("localFav");
    if (list) {
      return JSON.parse(localStorage.getItem("localFav"));
    } else {
      return [];
    }
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFavIcon = (event) => {
    console.log(event.target.id);
    setFavList(
      favList.filter((element) => {
        if (element["city"] !== event.target.id) return element;
        else return null;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("localFav", JSON.stringify(favList));
  }, [favList]);

  return (
    <>
      {favList.length === 0 ? (
        <NoList />
      ) : (
        <div className="favmain-div">
          <div className="fav-header">
            <p>{favList.length} Cities added as favourite</p>
            <h3 onClick={handleOpen}>Remove All</h3>
          </div>
          {favList.map((element, index) => {
            return (
              <div className="favsub-list-div" key={index}>
                <div className="favsub1-div">
                  <p className="favlist-city">
                    {element.city}, {element.country}
                  </p>
                  <div className="favsub2-div">
                    <img
                      src={`/assets/${SelectIcon(element.id)}.png`}
                      alt="icon"
                    />
                    <div className="favsub3-div">
                      <h1>{element.temp}</h1>
                      <h3>⁰C</h3>
                    </div>
                    <p>{element.description}</p>
                  </div>
                </div>
                <img
                  src={favheart}
                  alt="icon"
                  className="favlist-heart"
                  onClick={handleFavIcon}
                  id={element.city}
                />
              </div>
            );
          })}
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="modal"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <RemoveAll handleClose={handleClose} />
            </Fade>
          </Modal>
        </div>
      )}
    </>
  );
};

export default Favourite;
