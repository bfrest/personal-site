import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import ThemePicker from "./ThemePicker";

const comeIn = keyframes`
0%{transform: scale(.3); right: -100vw;}
100%{transform: scale(1); right: 0;}
`;

const ExtraStuff = styled.div`
  position: fixed;
  top: 0;
  right: 0vw;
  opacity: 1;
  margin: 20px 10px 0 0;
  display: flex;
  flex-direction: column;
  z-index: 2;
  padding: 15px;
  background: #fff;
  height: 90vh;
  width: 50%;
  font-size: 0.8em;
  border: 1px solid rgba(191, 191, 191, 0.9);
  border-radius: 10px;
  box-shadow: 0px 0px 5px gray;
  transition: all ease-in-out;
  animation: ${comeIn};
  animation-duration: 0.2s;
  line-height: 3em;

  h2 {
    margin: -10px 0 30px 0;
  }

  svg {
    position: absolute;
    right: 0;
    top: 0;
    width: 15px;
    cursor: pointer;
    margin: 10px 20px 0 0;
    fill: #222;
  }

  @media (min-width: 900px) {
    width: 20%;
    line-height: 2.6em;

    img {
      margin: 20px 20px 0 0;
    }
  }
`;

class Extras extends Component {
  render() {
    return (
      <ExtraStuff>
        <h2>Settings</h2>
        {/* This is the x to close the modal */}
        <svg onClick={() => this.props.handleSetting()} width="36" height="36" viewBox="0 0 263 264" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.331665" y="43.9653" width="61" height="310" rx="16" transform="rotate(-45 0.331665 43.9653)" />
          <rect x="219.535" y="0.831757" width="61" height="310" rx="16" transform="rotate(45 219.535 0.831757)" />
        </svg>
        <ThemePicker handleTheme={this.props.handleTheme} />
      </ExtraStuff>
    );
  }
}

export default Extras;
