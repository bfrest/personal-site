import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.div`
  background: none;
  color: #fff;
  width: 100vw;
  height: 40px;
  display: flex;
  flex-direction: row;
  position: absolute;
  justify-content: flex-end;
  z-index: 20;

  li {
    color: #fff;
    font-weight: 400;
    font-size: 1.8em;
    margin-right: 50px;

    &:hover {
      cursor: pointer;
      color: rgb(249, 186, 126);
    }
  }

  @media (min-width: 900px) {
    height: 50px;
    li {
      font-size: 1.8em;
    }

    svg {
      width: 40px;
      height: 40px;
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
          <Link to="/blog/conditional-rendering">
            <li>Blog</li>
          </Link>
        </NavBar>
      </div>
    );
  }
}

export default Nav;
