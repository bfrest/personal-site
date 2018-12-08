import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Post from "./components/Post";
import About from "./components/About";

export default (
  <Switch>
    <Route exact path="/" component={About} />
    <Route path="/home" component={About} />
    <Route path="/post" component={Post} />
  </Switch>
);
