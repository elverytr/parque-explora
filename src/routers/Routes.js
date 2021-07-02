import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Experimenta from "../components/Experimenta";
import Home from "../components/Home";
import NavMenu from "../shared/NavMenu";

export default function Routes() {
  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route path="/experimenta" component={Experimenta}/>
        <Route exact patch="/" component={Home}/>
      </Switch>
    </Router>
  );
}
