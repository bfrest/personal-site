import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const Breathe = keyframes`
  0% {transform: scale(1)}
 50% {transform: scale(1.2); margin:40px 40px;}
 100% {transform: scale(1)}
`;

const PostsButton = styled.button`
  border-radius: 50%;
  border: none;
  color: black;
  width: 80px;
  height: 80px;
  position: fixed;
  bottom: 3vh;
  right: 4vw;
  transition: all 0.4s;
  font-size: 0.9em;
  font-weight: 600;
  z-index: 1;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.fc};
  animation: ${Breathe} 1s;
  box-shadow: 0px 0px 5px gray;

  @media (min-width: 1200px) {
    display: none;
  }
`;

class ListButton extends Component {
  render() {
    return (
      <PostsButton type="button" onClick={() => this.props.toggleList()}>
        {this.props.showList === "none" ? "All Posts" : "Back"}
      </PostsButton>
    );
  }
}

export default ListButton;
