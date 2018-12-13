import React, { Component } from "react";
import { WhiteBackground } from "../styleHelpers";
import styled from "styled-components";
import { posts } from "../_FakePosts";

const PostWrapper = styled.div`
  height: 80vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

class PostList extends Component {
  render() {
    return (
      <WhiteBackground>
        <PostWrapper>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </PostWrapper>
      </WhiteBackground>
    );
  }
}

export default PostList;
