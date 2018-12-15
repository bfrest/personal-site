import React, { Component } from "react";
import styled from "styled-components";
import { posts } from "../_FakePosts";

const PostWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: ${props => props.listDisplay};
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background: #111;
  color: #fccf31;

  li {
    text-decoration: underline;
  }

  @media (min-width: 1000px) {
    height: 100vh;
    width: 15%;
  }
`;

class PostList extends Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  render() {
    return (
      // The list display attribute is getting the reference from props to display the list of posts
      <PostWrapper listDisplay={`${this.props.showList}`}>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </PostWrapper>
    );
  }
}

export default PostList;
