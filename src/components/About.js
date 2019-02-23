import React, { Component } from "react";
import TechList from "./TechList";
import SocialLinks from "./SocialLinks";
import styled from "styled-components";
import { WhiteBackground } from "../styleHelpers";

const FullScreen = styled.div`
  height: 100vh;
  display: inherit;
  flex-direction: column;
  align-items: center;
  color: #7e57c2;
  margin-top: 40px;

  svg {
    position: absolute;
    top: 45%;
    right: 0;
    margin-right: -25px;
  }
`;

const BlueBackGround = styled.div`
  background: #7e57c2;
  width: 100%;
  height: 100%;
  color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;

  h1 {
    font-size: 1.3em;
  }

  p {
    width: 80%;
    text-align: left;
    font-size: 1em;
    line-height: 1.9em;
  }
`;

const Created = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 900;
    font-size: 1.9em;
    text-decoration-line: underline;
    text-decoration-color: #00d2d3;
  }

  .box {
    width: 50px;
    height: 50px;
    background: #7e57c2;
  }

  img {
    width: 100px;
  }
`;

const AboutMe = styled.div`
  color: #00d2d3;

  h1 {
    text-decoration-line: underline;
    text-decoration-color: #7e57c2;
  }

  p {
    color: #7e57c2;
  }
`;

const ListOfStuff = styled.div`
  width: 100vw;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

class About extends Component {
  render() {
    return (
      <FullScreen>
        <BlueBackGround>
          <h1>Hey There!</h1>
          <p>
            My Name is Brendon Freston and I am a front end developer who values accesibility, creativity, and an innovative culture. I enjoy building useful, beautiful and fast
            digital products.
          </p>
        </BlueBackGround>

        <Created>
          <h2>What I've Created</h2>
          <p>Here are some of the things I have built in the past.</p>

          <ListOfStuff>
            <div className="box" />
            <div className="box" />
            <div className="box" />
            <div className="box" />
            <div className="box" />
            <div className="box" />
            <div className="box" />
            <div className="box" />
          </ListOfStuff>
        </Created>

        <AboutMe>
          <h1>About Me</h1>
          <p>I love dogs</p>
        </AboutMe>
      </FullScreen>
    );
  }
}

export default About;
