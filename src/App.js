import React, { Component } from "react";
import Nav from "./components/Nav";
import { ResizeContext } from "./context/ResizeProvider";
import router from "./router";
import "./App.css";
import ResizeObserver from "react-resize-observer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <ResizeContext.Consumer>
          {context => (
            //  this resize observer in an npm package that
            //  lets you get the boundingClientRect easy
            //  im using it to set the state of th context
            //  to be able to conditionally render things elsewhere
            <ResizeObserver
              onResize={rect => {
                // everytime this is resized it will fire.
                //! but I think I need to make it so it will do it on mount
                // This is going to make it so when the screen is in mobile it will not render the post list
                context.state.getRect(Math.round(rect.height), Math.round(rect.width));
              }}
            />
          )}
        </ResizeContext.Consumer>
        {router}
      </div>
    );
  }
}

export default App;
