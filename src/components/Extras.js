import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import ThemePicker from "./ThemePicker";

const show = keyframes`
  from{ {transform: scale(.3)}}
  to{ pink; {transform: scale(1)}}
`;

const hide = keyframes`
  from{{transform: scale(1)}}
  to{background: pink; {transform: scale(.3)}}
`;

const ExtraStuff = styled.div`
  position: fixed;
  top: 0;
  right: 0vw;
  margin: 20px 10px 0 0;
  display: flex;
  flex-direction: column;
  z-index: 2;
  padding: 15px;
  background: #fff;
  height: 90vh;
  width: 50%;
  font-size: 0.8em;
  border: 1px solid rgba(191, 191, 191, 0.9);
  border-radius: 10px;
  box-shadow: 0px 0px 5px gray;
  transition: all 2s;
  animation: ${show};
  animation-duration: 0.3s;

  h1 {
    margin: -10px 0 30px 0;
  }

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
    width: 20%;
    line-height: 2.6em;

    img {
      margin: 20px 20px 0 0;
    }
  }
`;

const Stuff = styled.div`
  width: 100vw;
  height: 100%;
  background: rgba(3, 3, 3, 0.75);
  z-index: 2;
  position: absolute;
`;

class Extras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amIShowing: null
    };

    this.modalRef = React.createRef();
    this.addModal = this.addModal.bind(this);
  }
  componentDidMount() {
    this.setState({ amIShowing: this.props.showSettings });
    this.addModal();
  }

  addModal() {
    const modal = this.modalRef;
    modal.current.style.animation = "";
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
          <ThemePicker handleTheme={this.props.handleTheme} />
        </ExtraStuff>
      </Stuff>
    );
  }
}

export default Extras;
