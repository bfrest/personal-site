import React, { Component } from "react";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";

const FullScreen = styled.div`
  display: inherit;
  flex-direction: column;
  align-items: center;
  color: #fff;
  background-image: url("https://res.cloudinary.com/bfrest/image/upload/v1551398362/blog/topographyNew.svg");

  .pattern {
    height: 100%;
    background: rgba(132, 141, 255, 0.9);

    svg {
      position: absolute;
      top: 45%;
      right: 0;
      margin-right: -25px;
    }

    .intro {
      color: #fff;
      font-size: 1.3em;
      margin: 40vh 30px 220px 30px;

      p {
        line-height: 1.3em;
        text-align: left;
        font-size: 1.6em;
        font-weight: 800;
      }
    }

    nav {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: flex-end;

      li {
        margin: 30px;
      }
    }
  }

  @media (min-width: 900px) {
    .intro {
      display: flex;
      flex-direction: column;

      p {
        width: 75%;
        align-self: center;
      }
    }
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
    text-decoration-color: rgb(249, 186, 126);
    text-align: center;
  }

  h1 {
    width: 100%;
    font-size: 2.9em;
  }

  h2 {
    font-size: 1.6em;
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
  font-size: 1.5em;

  .project {
    width: 80vw;
    margin: 30px;

    p {
      line-height: 1.3em;
      font-weight: 800;
      margin-top: -20px;
    }

    img {
      width: 100%;
      box-shadow: 3px 3px 5px #555;
      margin: 25px 0;
    }
    span {
      a {
        padding: 3px;
        font-weight: 800;
        color: rgb(249, 186, 126);
        transition: all 0.25s;

        :hover {
          color: #fff;
          background: linear-gradient(to right, darkRed, red);
          cursor: pointer;
          box-shadow: 2px 2px 2px black;
        }
      }
    }
  }

  @media (min-width: 900px) {
    .project {
      width: 60%;
    }
  }

  @media (min-width: 1400px) {
    .project {
      width: 80%;
    }
  }
`;

class About extends Component {
  render() {
    return (
      <FullScreen>
        <div className="pattern">
          <div className="intro">
            <p>My Name is Brendon, I'm a front end developer who enjoys building useful, beautiful and fast digital products.</p>
          </div>

          <Created>
            <h1>Previous Work</h1>

            <ListOfStuff>
              <div className="project">
                <h2>Maintenance Tool</h2>
                <p>An Internal tool for Foxridge Development that keeps track of services along with all the part numbers and oil amounts.</p>
                <a href="https://github.com/bfrest/Construction-pack">
                  <img src="https://res.cloudinary.com/bfrest/image/upload/v1564713530/Screen_Shot_2019-08-01_at_8.34.58_PM.png" alt="app screenshot" />
                </a>
              </div>

              <div className="project">
                <h2>Wolfahl</h2>
                <p>A portfolio for a videography company.</p>
                <a href="https://hungry-golick-59b4f5.netlify.com/">
                  <img src="https://res.cloudinary.com/bfrest/image/upload/v1564713257/wolfahl/Screen_Shot_2019-08-01_at_8.32.56_PM.png" alt="app screenshot" />
                </a>
              </div>

              <div className="project">
                <h2>Foxridge Development</h2>
                <p>Excavating company in Logan, Utah.</p>
                <a href="http://www.foxridgedev.co/">
                  <img src="https://res.cloudinary.com/bfrest/image/upload/v1550933205/blog/Screen_Shot_2019-02-23_at_7.22.33_AM.png" alt="foxridge screenshot" />
                </a>
              </div>

              <div className="project">
                <h2>Deathwish Coffee Clone</h2>
                <p>
                  Clone of an e-commerce coffee shop called
                  <span>
                    <a href="https://www.deathwishcoffee.com/">Deathwish Coffee</a>
                  </span>
                  .
                </p>
                <a href="https://github.com/bfrest/deathwish-clone">
                  <img src="https://res.cloudinary.com/bfrest/image/upload/v1550933167/blog/Screen_Shot_2019-02-23_at_7.07.29_AM.png" alt="app screenshot" />
                </a>
              </div>
            </ListOfStuff>
          </Created>
          <SocialLinks />
        </div>
      </FullScreen>
    );
  }
}

export default About;
