import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.div`
  background: white;
  width: 100%;
  height: 50px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: row;
  color: black;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 0;

  li:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

class Nav extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <li>Home</li>
          <Link to="/post/:id">
            <li>Blog</li>
          </Link>
          <li>Contact</li>
          <input type="text" placeholder="Search" />
        </NavBar>
      </div>
    );
  }
}

export default Nav;
