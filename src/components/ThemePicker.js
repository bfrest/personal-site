import React, { Component } from "react";
import styled from "styled-components";

const ThemeList = styled.ul`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  margin: 63px 0 0 10px;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.fc};
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
`;

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

class ThemePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { handleTheme, handlePicker } = this.props;
    return (
      <ThemeList>
        <p onClick={() => handlePicker()}>x</p>
        <li onClick={() => handleTheme(lightTheme)}>Light</li>
        <li onClick={() => handleTheme(darkTheme)}>Dark</li>
        <li onClick={() => handleTheme(purpYella)}>purpYella</li>
        <li onClick={() => handleTheme(purpleTheme)}>purpleTheme</li>
        <li onClick={() => handleTheme(othergrad)}>othergrad</li>
        <li onClick={() => handleTheme(greenGradient)}>Green Gradient</li>
      </ThemeList>
    );
  }
}

export default ThemePicker;
