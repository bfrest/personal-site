import React, { Component } from "react";
import styled from "styled-components";
import { posts } from "../_FakePosts";

const PostWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background: #111;
  color: #fccf31;
  top: 0;
  left: 0;
  z-index: 1;
  li {
    text-decoration: underline;
  }

  @media (min-width: 1000px) {
    height: 100vh;
    width: 15%;
  }
`;

class PostList extends Component {
  render() {
    return (
      <PostWrapper>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </PostWrapper>
    );
  }
}

export default PostList;
