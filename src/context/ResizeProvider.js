import React, { Component } from "react";
export const ResizeContext = React.createContext();

class ResizeProvider extends Component {
  state = {
    mainWidth: null,
    mainHeight: null,
    getRect: (height, width) => {
      this.setState({ mainHeight: height, mainWidth: width });
    }
  };

  render() {
    return <ResizeContext.Provider value={{ state: this.state }}>{this.props.children}</ResizeContext.Provider>;
  }
}

export default ResizeProvider;
