import React, { Component } from "react";
import Nav from "./components/Nav";
import router from "./router";
import "./App.css";
import ResizeObserver from "react-resize-observer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mainWidth: null,
      mainHeight: null
    };
  }

  render() {
    return (
      <div className="App">
        <ResizeObserver
          onResize={rect => {
            this.setState({ mainHeight: Math.round(rect.height), MainWidth: Math.round(rect.width) });
          }}
        />
        {router}
      </div>
    );
  }
}

export default App;
