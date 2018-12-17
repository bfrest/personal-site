import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.div`
  background-image: linear-gradient(-225deg, #fed717 0%, #ff5733 100%);
  width: 100%;
  height: 50px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  z-index: 1;

  li {
    color: white;
    font-size: 1.4em;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
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
          <Link to="/blog/first-post">
            <li>Blog</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </NavBar>
      </div>
    );
  }
}

export default Nav;
