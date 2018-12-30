import React, { Component } from "react";
import Nav from "./components/Nav";
import router from "./router";
import "./App.css";
import ResizeObserver from "react-resize-observer";
import { ThemeProvider } from "styled-components";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mainWidth: null,
      mainHeight: null
    };
  }
  render() {
    const lightTheme = {
      bg: "white",
      fc: "black"
    };

    const darkTheme = {
      bg: lightTheme.fc,
      fc: lightTheme.bg
    };

    const purpleTheme = {
      bg: "purple",
      fc: lightTheme.fc
    };

    const greenGradient = {
      bg: "linear-gradient(to left, #0fd850 0%, #f9f047 100%)",
      fc: lightTheme.bg
    };

    const purpYella = {
      bg: "linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)",
      fc: lightTheme.bg
    };

    const othergrad = {
      bg: "linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);",
      fc: lightTheme.bg
    };

    return (
      <ThemeProvider theme={lightTheme}>
        <div className="App">
          <ResizeObserver
            onResize={rect => {
              this.setState({ mainHeight: Math.round(rect.height), MainWidth: Math.round(rect.width) });
            }}
          />
          <Nav />

          {router}
          <select>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
