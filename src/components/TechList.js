import React, { Component } from "react";

class TechList extends Component {
  render() {
    return (
      <div className="tech-logos">
        <a href="https://reactjs.org/">
          <img src="https://res.cloudinary.com/bfrest/image/upload/v1541639622/blog/react.svg" alt="logo" className="logos" />
        </a>

        <a href="https://nodejs.org/en/">
          <img src="https://res.cloudinary.com/bfrest/image/upload/v1541639622/blog/nodejs-seeklogo.com.svg" alt="logo" className="logos" />
        </a>

        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <img src="https://res.cloudinary.com/bfrest/image/upload/v1541639622/blog/javascript-js-seeklogo.com.svg" alt="logo" className="logos" />
        </a>

        <a href="https://redux.js.org/">
          <img src="https://res.cloudinary.com/bfrest/image/upload/v1541639622/blog/redux-seeklogo.com.svg" alt="logo" className="logos" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
          <img src="https://res.cloudinary.com/bfrest/image/upload/v1541639622/blog/html5-with-wordmark-color.svg" alt="logo" className="logos" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <img src="https://res.cloudinary.com/bfrest/image/upload/v1541639622/blog/css3-seeklogo.com.svg" alt="logo" className="logos" />
        </a>
      </div>
    );
  }
}

export default TechList;
