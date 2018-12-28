import React, { Component } from "react";
import styled from "styled-components";

const PostWrapper = styled.div`
  width: 100%;
  text-align: left;
  font-size: 1.3em;
  padding: 40px 0 0 20px;

  i {
    color: lightgray;
  }

  h3 {
    font-family: sans-serif;
    background: #54a0ff;
    padding: 5px;
  }

  a {
    background: linear-gradient(to right, #ff5252 40%, #ff793f 90%);
    color: white;
    padding: 6px;
  }

  li {
    margin-left: -24px;
    font-size: 0.9em;
  }

  .code-sample {
    width: 50%;
    border-radius: 5%;
  }

  @media (min-width: 1200px) {
    margin: 40px 0 0 170px;
    font-size: 1.1em;
    width: 70%;
  }
`;

class OtherStuff extends Component {
  render() {
    return (
      <PostWrapper>
        <h1>Open Source Project</h1>

        <i className="post-date">December 6, 2018</i>

        <p>
          I have the opportunity to help a local trade school build an open source project that we will be documenting heavily to also be used as a training course and create video
          tutorials for the students. The project is going to start out as an extremely customizable admin dashboard. We have plans to take the project even further once we get the
          MVP out.
        </p>
        <p>
          My role in this is to plan and build out the frontend using React and modern JavaScript. I am extremely excited about this because it's going to push me to learn new
          things. I think it will be a good challenge to learn and clearly explain what, why and how we did things. We are currently still in the planning and prototyping phase
          making sure things can get done on time. Our goal is to try and use the least amount of npm packages, unless something will be to complex or time consuming.
        </p>
        <p>
          It will be cool to be able to make something thats open source but also a full class on how to build a full stack app. I have always wondered how it would be to make a
          course for coding. I have always had the idea of creating courses because it would help others in a big way.
        </p>
        <h4>Some of the cool features we will be adding</h4>
        <ul>
          <li>- resizable components</li>
          <li>- change color of ANYTHING on the page</li>
          <li>- drag and drop widgets where ever</li>
          <li>- time tracking</li>
          <li>- a chat that is unique to each 'project' where you can discuss it with only people who are working on the same project</li>
        </ul>
        <p>
          I will update this post with more info and a link to the project as we go. So far have a little demo on resizing things that you can check out{" "}
          <a href="https://codesandbox.io/s/y2n8xjqwjz">here</a>.
        </p>
      </PostWrapper>
    );
  }
}

export default OtherStuff;
