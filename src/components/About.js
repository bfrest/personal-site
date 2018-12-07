import React from "react";
import TechList from "./TechList";
import SocialLinks from "./SocialLinks";

const About = () => {
  return (
    <div>
      <div className="tech">
        <h1>Brendon Freston</h1>
        <p className="desc">Front End Focused Developer</p>
        <TechList />
      </div>
      <SocialLinks />
    </div>
  );
};

export default About;
