import React, { Component } from "react";
import Nav from "./components/Nav";
import router from "./router";
import "./App.css";
import ResizeObserver from "react-resize-observer";
import styled, { ThemeProvider } from "styled-components";

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
  bg: "linear-gradient(to left, #0fd850 50%, #f9f047 100%)",
  fc: lightTheme.bg
};

const purpYella = {
  bg: "linear-gradient(-225deg, #231557 10%, #44107A 29%, #FF1361 67%, #FFF800 100%)",
  fc: lightTheme.bg
};

const othergrad = {
  bg: "linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);",
  fc: lightTheme.bg
};

const ThemePicker = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 110px;
  z-index: 3;
  margin: 63px 0 0 10px;
`;

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
          <Nav />
          {router}
          {/* <ThemePicker>
            <option onClick={() => this.handleTheme(lightTheme)}>Light</option>
            <option onClick={() => this.handleTheme(darkTheme)}>Dark</option>
            <option onClick={() => this.handleTheme(purpYella)}>purpYella</option>
            <option onClick={() => this.handleTheme(purpleTheme)}>purpleTheme</option>
            <option onClick={() => this.handleTheme(othergrad)}>othergrad</option>
            <option onClick={() => this.handleTheme(greenGradient)}>Green Gradient</option>
          </ThemePicker> */}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
