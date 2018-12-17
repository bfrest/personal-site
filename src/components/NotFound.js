import React, { Component } from "react";
import styled from "styled-components";

const ErrorMessage = styled.div`
  height: 100vh;
  width: 100vw;
  margin-top: 20%;
`;

class NotFound extends Component {
  render() {
    return <ErrorMessage>404</ErrorMessage>;
  }
}

export default NotFound;
