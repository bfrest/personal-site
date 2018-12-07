import React, { Component } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <About />
      </div>
    );
  }
}

export default App;
