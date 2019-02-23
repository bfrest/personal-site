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

  .intro {
    background: #7e57c2;
    color: #fff;
    font-size: 1.3em;
    height: 60vh;
    padding: 20px;
  }
`;

const Created = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;

  h2 {
    font-weight: 900;
    font-size: 1.9em;
    text-decoration-line: underline;
    text-decoration-color: #00d2d3;
  }

  img {
    width: 100px;
  }
`;

const ListOfStuff = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  font-size: 1.3em;

  .project {
    height: 
    width: 80vw;
    text-align: left;
    margin: 30px;

    img {
      width: 100%;
      box-shadow: 3px 3px 5px #555;
      margin: 25px 0;
    }
  }
`;

class About extends Component {
  render() {
    return (
      <FullScreen>
        <div className="intro">
          <h1>Hey There!</h1>
          <p>
            My Name is Brendon and I am a front end developer who values accesibility, creativity, and an innovative culture. I enjoy building useful, beautiful and fast digital
            products.
          </p>
        </div>

        <Created>
          <h2>What I've Created</h2>
          <p>Here are some of the things I have built in the past.</p>

          <ListOfStuff>
            <div className="project">
              <h2>Slack Clone</h2>
              <img src="https://res.cloudinary.com/bfrest/image/upload/v1550933164/blog/Screen_Shot_2019-02-23_at_7.45.05_AM.png" />
              <p>
                This slack clonse was a clonse of slacl This slack clonse was a clonse of slacl This slack clonse was a clonse of slacl This slack clonse was a clonse of slacl This
                slack clonse was a clonse of slacl This slack clonse was a clonse of slacl This slack clonse was a clonse of slacl
              </p>
            </div>

            <div className="project">
              <h2>Deathwish Coffee Clone</h2>
              <img src="https://res.cloudinary.com/bfrest/image/upload/v1550933167/blog/Screen_Shot_2019-02-23_at_7.07.29_AM.png" />
              <p>
                This slack clonse was a clonse of slacl This slack clonse was a clonse of slacl This slack clonse was a clonse of slacl This slack clonse was a clonse of slacl This
                slack clonse was a clonse of slacl This slack clonse was a clonse of slacl This slack clonse was a clonse of slacl
              </p>
            </div>

            <div className="project">
              <h2>Foxridge Development</h2>
              <img src="https://res.cloudinary.com/bfrest/image/upload/v1550933205/blog/Screen_Shot_2019-02-23_at_7.22.33_AM.png" />
              <p>
                This slack clonse was a clonse of slacl This slack clonse was a clonse of slacl This slack clonse was a clonse of slacl This slack clonse was a clonse of slacl This
                slack clonse was a clonse of slacl This slack clonse was a clonse of slacl This slack clonse was a clonse of sla
              </p>
            </div>
          </ListOfStuff>
        </Created>
      </FullScreen>
    );
  }
}

export default About;
