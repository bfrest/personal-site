import React, { Component } from "react";
import PostList from "./PostList";
import styled from "styled-components";

const BlogWrap = styled.div`
  height: 100vh;
  color: black;
  display: flex;
  flex-direction: row;

  h2 {
    margin-top: 300px;
  }
`;

class Blog extends Component {
  render() {
    return (
      <BlogWrap>
        <h2>This will be where the currently selected blog post is.....................</h2>
        <PostList />
      </BlogWrap>
    );
  }
}

export default Blog;
