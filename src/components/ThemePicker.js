import React, { Component } from "react";
import styled from "styled-components";

const ThemeList = styled.ul`
  cursor: pointer;
  display: flex;
  font-size: 1.3em;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  border-top: 1px solid lightgray;
  margin-top: -23px;
  margin-right: 9%;
  overflow: scroll;

  @media (min-width: 900px) {
    margin-right: 2%;
  }
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
  fc: "#ff0aff"
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

const pinky = {
  bg: "#fadadd",
  fc: "#ff6666"
};

const huntin101 = {
  bg: "#FF6700",
  fc: "#00563B"
};

class ThemePicker extends Component {
  render() {
    const { handleTheme } = this.props;
    return (
      <div>
        <h2>Change Theme</h2>
        <ThemeList>
          <li onClick={() => handleTheme(lightTheme)}>Salt n' Pepper</li>
          <li onClick={() => handleTheme(darkTheme)}>Pepper n' Salt</li>
          <li onClick={() => handleTheme(purpYella)}>Purp, Pink & Yella</li>
          <li onClick={() => handleTheme(purpleTheme)}>Pure Purple</li>
          <li onClick={() => handleTheme(othergrad)}>Easter?</li>
          <li onClick={() => handleTheme(greenGradient)}>Green Gradient</li>
          <li onClick={() => handleTheme(pinky)}>Pink</li>
          <li onClick={() => handleTheme(huntin101)}>huntin 101</li>
        </ThemeList>
      </div>
    );
  }
}

export default ThemePicker;
