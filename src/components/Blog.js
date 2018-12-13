import React, { Component } from "react";
import PostList from "./PostList";
import styled from "styled-components";
import { ResizeContext } from "../context/ResizeProvider";
import Post from "./Post";

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
        <ResizeContext.Consumer>
          {context => {
            if (context.state.mainWidth > 1000) {
              return <PostList />;
            }
          }}
        </ResizeContext.Consumer>
        <Post />
      </BlogWrap>
    );
  }
}

export default Blog;
