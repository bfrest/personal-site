import React, { Component } from "react";
import Nav from "./components/Nav";
import ThemePicker from "./components/ThemePicker";
import router from "./router";
import "./App.css";
import ResizeObserver from "react-resize-observer";
import styled, { ThemeProvider } from "styled-components";

const lightTheme = {
  bg: "white",
  fc: "black"
};

const ShowButton = styled.button`
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  margin: 20px 0 0 10px;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      mainWidth: null,
      mainHeight: null,
      theme: lightTheme,
      showPicker: false
    };

    this.handleTheme = this.handleTheme.bind(this);
    this.handlePicker = this.handlePicker.bind(this);
  }

  componentDidMount() {
    this.handleTheme(lightTheme);
  }

  handleTheme(colorTheme) {
    this.setState({ theme: colorTheme });
  }

  handlePicker() {
    if (this.state.showPicker === false) {
      this.setState({ showPicker: true });
    } else {
      this.setState({ showPicker: false });
    }
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

          {this.state.showPicker === true ? (
            <ThemePicker handleTheme={this.handleTheme} handlePicker={this.handlePicker} />
          ) : (
            <ShowButton onClick={() => this.handlePicker()}>change Theme</ShowButton>
          )}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
