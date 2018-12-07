import React, { Component } from "react";
import styled from "styled-components";

const NavBar = styled.div`
  background: black;
  width: 100%;
  height: 50px;
  box-shadow: 2px 2px 3px black;
  display: flex;
  flex-direction: row;
  color: white;
  align-items: center;
  justify-content: space-evenly;

  li:hover {
    color: yellow;
    cursor: pointer;
  }
`;

class Nav extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <li>Home</li>
          <li>Blog</li>
          <li>Contact</li>
          <input type="text" placeholder="Search" />
        </NavBar>
      </div>
    );
  }
}

export default Nav;
