import React from "react";
import { Route, Switch } from "react-router-dom";
// import Favourite from "../components/favourite/Favourite";
// import RecentSearch from "../components/recentSearch/RecentSearch";
import Home from "../Container/Home/Home.js";

const Routing = ({ searchTerm, searchStart }) => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home searchTerm={searchTerm} searchStart={searchStart} />
        </Route>
        {/* <Route path="/favourite" component={Favourite} />
        <Route path="/recent-search" component={RecentSearch} /> */}
      </Switch>
    </>
  );
};

export default Routing;
