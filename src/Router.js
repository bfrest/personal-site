import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Post from "./components/Post";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/post/:postId" component={Post} />
    </Switch>
  </BrowserRouter>
);

export default Router;
