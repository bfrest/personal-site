import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Blog from "./components/Blog";
import About from "./components/About";

export default (
  <Switch>
    <Route exact path="/" component={About} />
    <Route path="/home" component={About} />
    <Route path="/blog" component={Blog} />
  </Switch>
);
