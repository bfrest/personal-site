import React, { Component } from "react";
import { WhiteBackground } from "../styleHelpers";
import styled from "styled-components";

const PostWrapper = styled.div`
  height: 80vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class PostList extends Component {
  render() {
    return (
      <WhiteBackground>
        <PostWrapper>
          <li>Blog Post 1</li>
          <li>Blog Post 2</li>
          <li>Blog Post 3</li>
          <li>Blog Post 4</li>
          <li>Blog Post 5</li>
          <li>Blog Post 6</li>
        </PostWrapper>
      </WhiteBackground>
    );
  }
}

export default PostList;
