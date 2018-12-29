import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.div`
  background: white;
  width: 100%;
  height: 60px;
  box-shadow: 0px 1px 6px #e5e5e5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 1;

  li {
    font-weight: 400;
    color: e5e5e5;
    font-size: 1.8em;
    margin: 0 60px;
    transition: all 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      color: black;
      transform: scale(1.04);
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
          <Link to="/blog/open-source">
            <li>Blog</li>
          </Link>
        </NavBar>
      </div>
    );
  }
}

export default Nav;
