import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Extras from "./Extras";

const NavBar = styled.div`
  background: ${props => props.theme.bg};
  color: ${props => props.theme.fc};
  width: 100vw;
  height: 40px;
  box-shadow: 0px 1px 3px rgba(61, 61, 61, 0.6);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  z-index: 1;

  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
    path {
      fill: ${props => props.theme.fc};
    }
  }

  li {
    color: ${props => props.theme.fc};
    font-weight: 400;
    font-size: 1.2em;
    transition: all 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
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
  constructor(props) {
    super(props);
    this.state = { showSettings: false, showPlaygroundTip: false };
    this.handleSettings = this.handleSettings.bind(this);
    this.togglePlaygroundTip = this.togglePlaygroundTip.bind(this);
  }

  handleSettings() {
    if (this.state.showSettings === false) {
      this.setState({ showSettings: true });
    } else {
      this.setState({ showSettings: false });
    }
  }

  togglePlaygroundTip() {
    if (this.state.showPlaygroundTip === false) {
      this.setState({ showPlaygroundTip: true });
    } else {
      this.setState({ showPlaygroundTip: false });
    }
  }

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

          {/* This is the settings icon */}
          <svg
            onClick={() => this.handleSettings()}
            onMouseOver={() => this.togglePlaygroundTip()}
            onMouseLeave={() => this.togglePlaygroundTip()}
            viewBox="0 0 269 269"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M267.92 119.461C267.495 115.683 263.09 112.844 259.281 112.844C246.966 112.844 236.038 105.613 231.455 94.43C226.773 82.976 229.792 69.618 238.97 61.199C241.859 58.558 242.21 54.137 239.787 51.066C233.484 43.062 226.32 35.832 218.498 29.566C215.435 27.108 210.941 27.45 208.285 30.391C200.275 39.262 185.887 42.559 174.769 37.92C163.199 33.053 155.903 21.329 156.617 8.744C156.852 4.791 153.963 1.354 150.022 0.895002C139.984 -0.265998 129.858 -0.301998 119.79 0.815002C115.894 1.245 113.005 4.601 113.136 8.504C113.574 20.965 106.19 32.484 94.735 37.176C83.75 41.663 69.463 38.394 61.469 29.602C58.827 26.706 54.406 26.35 51.328 28.749C43.274 35.068 35.949 42.304 29.588 50.242C27.107 53.328 27.472 57.801 30.39 60.456C39.743 68.926 42.763 82.4 37.904 93.986C33.265 105.032 21.795 112.151 8.66399 112.151C4.40299 112.014 1.36799 114.874 0.901987 118.748C-0.280013 128.844 -0.294013 139.131 0.843987 149.309C1.26599 153.103 5.80499 155.917 9.65599 155.917C21.358 155.618 32.593 162.863 37.306 174.332C42.004 185.786 38.984 199.136 29.792 207.562C26.917 210.203 26.552 214.617 28.975 217.688C35.219 225.641 42.384 232.878 50.234 239.196C53.313 241.677 57.793 241.327 60.462 238.386C68.502 229.493 82.889 226.202 93.963 230.85C105.562 235.702 112.858 247.425 112.144 260.017C111.911 263.972 114.814 267.415 118.739 267.867C123.874 268.466 129.04 268.765 134.22 268.765C139.137 268.765 144.055 268.495 148.972 267.948C152.869 267.518 155.756 264.162 155.625 260.252C155.174 247.798 162.571 236.279 174.011 231.595C185.07 227.078 199.297 230.384 207.292 239.167C209.949 242.057 214.339 242.406 217.434 240.015C225.473 233.711 232.783 226.481 239.174 218.521C241.654 215.442 241.304 210.962 238.371 208.308C229.018 199.838 225.983 186.362 230.842 174.784C235.41 163.885 246.454 156.567 258.333 156.567L259.995 156.61C263.848 156.923 267.393 153.955 267.86 150.022C269.044 139.917 269.058 129.639 267.92 119.461ZM134.595 179.491C109.877 179.491 89.771 159.385 89.771 134.667C89.771 109.95 109.877 89.843 134.595 89.843C159.312 89.843 179.418 109.95 179.418 134.667C179.418 159.385 159.312 179.491 134.595 179.491Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="268.765" height="268.765" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </NavBar>

        {/* Show the settings if the icon is clicked. */}
        {this.state.showSettings === true && <Extras handleTheme={this.props.handleTheme} handleSetting={this.handleSettings} showSettings={this.state.showSettings} />}
      </div>
    );
  }
}

export default Nav;
