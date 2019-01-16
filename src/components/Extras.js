import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import ThemePicker from "./ThemePicker";
import OtherSettings from "./OtherSettings";

const show = keyframes`
  from{ {transform: scale(.3)}}
  to{ pink; {transform: scale(1)}}
`;

const fadeIn = keyframes`
  from{opacity: 0}
  to{opacity: 1}
`;

const ExtraStuff = styled.div`
  position: fixed;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  z-index: 2;
  background: #fff;
  padding: 5px;
  font-size: 0.8em;
  border-radius: 10px;
  box-shadow: 0px 0px 5px gray;
  transition: all 2s;
  animation: ${show};
  animation-duration: 0.3s;
  height: 600px;
  min-width: 200px;
  overflow-y: scroll;

  svg {
    position: absolute;
    right: 0;
    top: 0;
    width: 15px;
    cursor: pointer;
    margin: 10px 20px 0 0;
    fill: #222;
  }

  @media (min-width: 900px) {
    line-height: 2.6em;
    min-width: 400px;
  }
`;

const Stuff = styled.div`
  width: 100vw;
  height: 100%;
  background: rgba(3, 3, 3, 0.75);
  display: flex;
  align-content: center;
  justify-content: center;
  z-index: 2;
  position: fixed;
  animation: ${fadeIn};
  animation-duration: 0.3s;
`;

const ListOfSettings = styled.div`
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    text-align: center;
    align-content: space-around;
    width: 100%;
    li {
      margin: 10px;
      border-bottom: 2px solid #333;
    }
  }
`;

class Extras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSetting: null,
      subCategory: "ThemePicker"
    };

    this.modalRef = React.createRef();
    this.handleSubCategory = this.handleSubCategory.bind(this);
  }

  componentDidMount() {
    this.setState({ showSetting: this.props.showSettings });
  }

  handleSubCategory(componentName) {
    this.setState({ subCategory: componentName });
    console.log(componentName);
  }

  render() {
    return (
      <Stuff>
        <ExtraStuff ref={this.modalRef}>
          <h1>Settings</h1>
          {/* This is the x to close the modal */}
          <svg onClick={() => this.props.handleSetting()} width="36" height="36" viewBox="0 0 263 264" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.331665" y="43.9653" width="61" height="310" rx="16" transform="rotate(-45 0.331665 43.9653)" />
            <rect x="219.535" y="0.831757" width="61" height="310" rx="16" transform="rotate(45 219.535 0.831757)" />
          </svg>

          <ListOfSettings>
            {/* You can have these change the state, maybe to whatSettingIsShowing or something. Then condtionally render the right compoment based on the string that is the state */}
            <ul>
              <li onClick={() => this.handleSubCategory("ThemePicker")}>Theme Changer</li>
              <li onClick={() => this.handleSubCategory("asf")}>Coming Soon</li>
              <li>Coming Soon</li>
              <li>Coming Soon</li>
            </ul>
          </ListOfSettings>
          {/* This will be where we can change the component */}
          {this.state.subCategory === "ThemePicker" ? <ThemePicker handleTheme={this.props.handleTheme} /> : <OtherSettings />}
        </ExtraStuff>
      </Stuff>
    );
  }
}

export default Extras;
