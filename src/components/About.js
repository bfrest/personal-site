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

  h1,
  h2,
  h3 {
    font-weight: 900;
    text-decoration-line: underline;
    text-decoration-color: #00d2d3;
    text-align: center;
  }

  h1 {
    width: 100%;
    font-size: 1.9em;
  }

  h2 {
    font-size: 1.2em;
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
    width: 80vw;
    text-align: left;
    margin: 30px;

    p {
      line-height: 1.3em;
    }

    img {
      width: 100%;
      box-shadow: 3px 3px 5px #555;
      margin: 25px 0;
    }

    h3 {
      margin-bottom: -20px;
    }

    a {
      padding: 3px;
      font-weight: 800;
      color: #00d2d3;
      transition: all 0.25s;
      :hover {
        color: #fff;
        background: linear-gradient(to right, darkRed, red);
        cursor: pointer;
        box-shadow: 2px 2px 2px black;
      }
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
          <h1>Previous Work</h1>

          <ListOfStuff>
            <div className="project">
              <h2>Foxridge Development</h2>
              <p>I developed a fully responsive site for an excavating company in Logan, Utah.</p>

              <img src="https://res.cloudinary.com/bfrest/image/upload/v1550933205/blog/Screen_Shot_2019-02-23_at_7.22.33_AM.png" alt="foxridge screenshot" />
            </div>

            <div className="project">
              <h2>Slack Clone</h2>
              <p />
              <p>It's a responsive real time chat app with authentication. Built using react, Sass, nodejs, express and websockets.</p>
              <img src="https://res.cloudinary.com/bfrest/image/upload/v1550933164/blog/Screen_Shot_2019-02-23_at_7.45.05_AM.png" alt="app screenshot" />

              <h3>Settings Menu</h3>
              <img src="https://res.cloudinary.com/bfrest/image/upload/v1550933170/blog/Screen_Shot_2019-02-23_at_7.21.36_AM.png" alt="menu screenshot" />
            </div>

            <div className="project">
              <h2>Deathwish Coffee Clone</h2>
              <p>
                Fully responsive clone of an e-commerce coffee shop called{" "}
                <span>
                  <a href="https://www.deathwishcoffee.com/">Deathwish Coffee</a>
                </span>
              </p>
              <img src="https://res.cloudinary.com/bfrest/image/upload/v1550933167/blog/Screen_Shot_2019-02-23_at_7.07.29_AM.png" />
            </div>
          </ListOfStuff>
        </Created>
      </FullScreen>
    );
  }
}

export default About;
