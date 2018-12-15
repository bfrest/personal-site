import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.div`
  background: #fccf31;
  width: 100%;
  height: 50px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 0;

  li {
    color: black;
    font-size: 1.4em;
    &:hover {
      cursor: pointer;
    }
  }
`;
class Nav extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <li>Contact</li>
        </NavBar>
      </div>
    );
  }
}

export default Nav;
