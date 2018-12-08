import React from "react";
import TechList from "./TechList";
import SocialLinks from "./SocialLinks";
import styled from "styled-components";

const WhiteBackground = styled.div`
  background: white;
  align-self: center;
  border: 8px solid rgba(230, 230, 230, 0.3);
  width: 30%;
`;

const About = () => {
  return (
    <WhiteBackground>
      <div className="tech">
        <h1>Brendon Freston</h1>
        <p className="desc">Front End Focused Developer</p>
        <TechList />
      </div>
      <SocialLinks />
    </WhiteBackground>
  );
};

export default About;
