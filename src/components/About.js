import React, { Component } from "react";
import TechList from "./TechList";
import SocialLinks from "./SocialLinks";
import styled from "styled-components";
import { WhiteBackground } from "../styleHelpers";

const FullScreen = styled.div`
  height: 100vh;
  display: inherit;
  justify-content: center;
  background: url("https://res.cloudinary.com/bfrest/image/upload/v1544274683/blog/topography.png");
`;

class About extends Component {
  render() {
    return (
      <FullScreen>
        <WhiteBackground>
          <div className="tech">
            <h1>Brendon Freston</h1>
            <p className="desc">Front End Focused Developer</p>
            <TechList />
          </div>
          <SocialLinks />
        </WhiteBackground>
      </FullScreen>
    );
  }
}

export default About;
