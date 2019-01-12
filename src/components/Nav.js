import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Extras from "./Extras";
import PlaygroundTip from "./PlaygroundTip";
import think from "./think.svg";

const NavBar = styled.div`
  background: ${props => props.theme.bg};
  color: ${props => props.theme.fc};
  width: 100vw;
  height: 60px;
  box-shadow: 0px 1px 6px #e5e5e5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  z-index: 1;

  img {
    cursor: pointer;
    width: 40px;
    fill: ${props => props.theme.fc};
  }

  li {
    color: ${props => props.theme.fc};
    font-weight: 400;
    font-size: 1.8em;
    transition: all 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      transform: scale(1.04);
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
          <Link to="/blog/open-source">
            <li>Blog</li>
          </Link>
          <img onClick={() => this.handleSettings()} onMouseOver={() => this.togglePlaygroundTip()} onMouseLeave={() => this.togglePlaygroundTip()} src={think} alt="settings" />
          {this.state.showPlaygroundTip === true && <PlaygroundTip />}
        </NavBar>
        {this.state.showSettings === true && <Extras handleTheme={this.props.handleTheme} handleSetting={this.handleSettings} />}
      </div>
    );
  }
}

export default Nav;
