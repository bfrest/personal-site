import React, { Component } from "react";
import styled from "styled-components";
import ThemePicker from "./ThemePicker";

const ExtraStuff = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 3;
  bottom: 0;
  left: 0;
  margin: 0;
  width: 100vw;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.fc};
  border-top: 1px solid rgba(211, 211, 211, 0.2);

  svg {
    position: absolute;
    right: 0;
    top: 0;
    width: 25px;
    cursor: pointer;
    margin: 10px 20px 0 0;
    fill: ${props => props.theme.fc};
  }

  @media (min-width: 900px) {
    img {
      margin: 20px 20px 0 0;
    }
  }
`;

class Extras extends Component {
  render() {
    console.log(this.props);
    return (
      <ExtraStuff>
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
