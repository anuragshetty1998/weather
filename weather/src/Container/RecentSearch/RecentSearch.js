import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { SelectIcon } from "../../Services/SelectIcon";
import NoList from "../../Components/Nolist/Nolist";
import RemoveAll from "../../Components/RemoveAll/RemoveAll";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "../Favourite/Favourite.css";

const RecentSearch = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const [recentList, setRecentList] = useState(() => {
    let list = localStorage.getItem("localRecent");
    if (list) {
      return JSON.parse(localStorage.getItem("localRecent"));
    } else {
      return [];
    }
  });

  const [favList, setFavList] = useState(() => {
    let list = localStorage.getItem("localFav");
    if (list) {
      return JSON.parse(localStorage.getItem("localFav"));
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("localFav", JSON.stringify(favList));
  }, [favList]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const favIconClick = (data) => {
    if (favList.some((ele) => ele.city === data.city)) {
      setFavList(
        favList.filter((element) => {
          if (element["city"] !== data.city) return element;
          else return null;
        })
      );
    } else {
      setFavList([...favList, data]);
    }
  };

  const iconFav = (data) => {
    if (favList.some((element) => element.city === data)) {
      return "favheart";
    } else {
      return "notfavheart";
    }
  };

  const cityClick = (data) => {
    localStorage.setItem("localCity", data);
    history.push("/");
  };

  return (
    <>
      {recentList.length === 0 ? (
        <NoList />
      ) : (
        <div className="favmain-div">
          <div className="fav-header">
            <p>You recently searched for</p>
            <h3 onClick={handleOpen}>Clear All</h3>
          </div>
          {recentList.map((element, index) => {
            return (
              <div className="favsub-list-div" key={index}>
                <div className="favsub1-div">
                  <div className="favlist-city">
                    <p onClick={() => cityClick(element.city)}>
                      {element.city}, {element.country}
                    </p>
                  </div>
                  <div className="favsub2-div">
                    <img
                      src={`/assets/${SelectIcon(element.id)}.png`}
                      alt="icon"
                    />
                    <div className="favsub3-div">
                      <h1>{element.temp}</h1>
                      {element.unit === "metric" ? <h3>⁰C</h3> : <h3>⁰F</h3>}
                    </div>
                    <p>{element.description}</p>
                  </div>
                </div>
                <img
                  src={`/assets/${iconFav(element.city)}.png`}
                  alt="icon"
                  className="favlist-heart"
                  onClick={() => favIconClick(element)}
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

export default RecentSearch;
