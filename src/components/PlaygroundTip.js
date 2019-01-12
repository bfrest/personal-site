import React, { Component } from "react";
import styled from "styled-components";

const ToolTip = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  top: 0;
  margin: 70px 130px;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.fc};
  z-index: 8;
  box-shadow: 5px 5px 15px rgba(50, 50, 55, 0.7);
  border-radius: 10px;
  padding: 10px;
  line-height: 1em;
  width: 110px;
  text-align: center;
`;

class PlaygroundTip extends Component {
  state = {};
  render() {
    return (
      <ToolTip>
        <p>Everything in here is just a playground for me to break and make things!</p>
      </ToolTip>
    );
  }
}

export default PlaygroundTip;
