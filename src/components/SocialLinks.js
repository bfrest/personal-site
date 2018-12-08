import React, { Component } from "react";

class SocialLinks extends Component {
  render() {
    return (
      <div className="contactCard">
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
      </div>
    );
  }
}

export default SocialLinks;
