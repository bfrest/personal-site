import React from "react";
import { Route, Switch } from "react-router-dom";
import Blog from "./components/Blog";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import Extras from "./components/Extras";

export default (
  <Switch>
    <Route exact path="/" component={About} />
    <Route path="/home" component={About} />
    <Route path="/Blog" component={Blog} />
    <Route path="/contact" component={Contact} />
    <Route path="/extras" component={Extras} />
    <Route component={NotFound} />
  </Switch>
);
