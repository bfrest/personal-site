import React, { Component } from "react";
import styled from "styled-components";

const Socials = styled.div`
  .fa {
    font-size: 2.2em;
    margin: 20px 20px;
  }

  .fa-twitter:hover {
    color: #1da1f2;
    text-shadow: 0px 0px 8px #1da1f2;
  }

  .fa-instagram:hover {
    color: #ff7979;
    text-shadow: 0px 0px 8px #ff7979;
  }

  .fa-github:hover {
    color: #535c68;
    text-shadow: 0px 0px 8px #535c68;
  }

  .fa-codepen:hover {
    color: #7ed6df;
    text-shadow: 0px 0px 8px #7ed6df;
  }

  .fa-linkedin:hover {
    color: #5352ed;
    text-shadow: 0px 0px 8px #5352ed;
  }

  @media (min-width: 900px) {
    .fa {
      font-size: 2.2em;
      margin: 20px 40px;
    }
  }
`;

class SocialLinks extends Component {
  render() {
    return (
      <Socials>
        <a href="https://twitter.com/b_frest" className="social">
          <i className="fa fa-twitter" />
        </a>
        <a href="https://www.instagram.com/bfrest/">
          <i className="fa fa-instagram" />
        </a>
        <a href="https://github.com/bfrest">
          <i className="fa fa-github" />
        </a>
        <a href="https://codepen.io/bfrest">
          <i className="fa fa-codepen" />
        </a>
        <a href="https://www.linkedin.com/in/brendon-freston/">
          <i className="fa fa-linkedin" />
        </a>
      </Socials>
    );
  }
}

export default SocialLinks;
