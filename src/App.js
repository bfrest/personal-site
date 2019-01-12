import React, { Component } from "react";
import Nav from "./components/Nav";
import router from "./router";
import "./App.css";
import ResizeObserver from "react-resize-observer";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  bg: "white",
  fc: "black"
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      mainWidth: null,
      mainHeight: null,
      theme: lightTheme
    };

    this.handleTheme = this.handleTheme.bind(this);
  }

  componentDidMount() {
    this.handleTheme(lightTheme);
  }

  handleTheme(colorTheme) {
    this.setState({ theme: colorTheme });
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <div className="App">
          <ResizeObserver
            onResize={rect => {
              this.setState({ mainHeight: Math.round(rect.height), MainWidth: Math.round(rect.width) });
            }}
          />
          <Nav handleTheme={this.handleTheme} />
          {router}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
