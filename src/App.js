import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div class="tech">
          <h1>Brendon Freston</h1>
          <p class="desc">Front End Focused Developer</p>
          <div class="tech-logos">
            <a href="https://reactjs.org/">
              <img src="https://res.cloudinary.com/bfrest/image/upload/v1541639622/react.svg" alt="logo" class="logos" />
            </a>
            <a href="https://nodejs.org/en/">
              <img src="https://res.cloudinary.com/bfrest/image/upload/v1541639622/nodejs-seeklogo.com.svg" alt="logo" class="logos" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <img src="https://res.cloudinary.com/bfrest/image/upload/v1541639622/javascript-js-seeklogo.com.svg" alt="logo" class="logos" />
            </a>
            <a href="https://redux.js.org/">
              <img src="https://res.cloudinary.com/bfrest/image/upload/v1541639622/redux-seeklogo.com.svg" alt="logo" class="logos" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
              <img src="https://res.cloudinary.com/bfrest/image/upload/v1541639622/html5-with-wordmark-color.svg" alt="logo" class="logos" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img src="https://res.cloudinary.com/bfrest/image/upload/v1541639622/css3-seeklogo.com.svg" alt="logo" class="logos" />
            </a>
          </div>
        </div>

        <div class="contactCard">
          <a href="https://twitter.com/b_frest">
            <i class="fa fa-twitter" />
          </a>
          <a href="https://www.instagram.com/bfrest/">
            <i class="fa fa-instagram" />
          </a>
          <a href="https://github.com/bfrest">
            <i class="fa fa-github" />
          </a>
          <a href="https://codepen.io/bfrest">
            <i class="fa fa-codepen" />
          </a>
          <a href="https://www.linkedin.com/in/brendon-freston/">
            <i class="fa fa-linkedin" />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
