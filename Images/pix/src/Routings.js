import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import App from "./App";
import ImageView from "./ImageView/ImageView";

const Routings = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/image/:id" component={ImageView} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routings;
