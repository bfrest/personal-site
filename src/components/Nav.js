import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import wiz from "../wiz.svg";

const NavBar = styled.div`
  background: linear-gradient(to right, #ff5252 40%, #ff793f 90%);
  width: 100%;
  height: 50px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 1;

  li {
    color: white;
    font-size: 1.4em;
    margin: 0 60px;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  img {
    position: absolute;
    left: 0;
    top: 0;
    margin: -70px 0 0 10px;
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
          {/* <img src={wiz} /> */}
        </NavBar>
      </div>
    );
  }
}

export default Nav;
