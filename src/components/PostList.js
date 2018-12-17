import React, { Component } from "react";
import styled from "styled-components";
import { posts } from "../_FakePosts";
import { Link } from "react-router-dom";

const PostWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: ${props => props.listDisplay};
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background: #f7f7f7;

  li {
    margin: 20px 5px;
    color: black;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  @media (min-width: 1200px) {
    height: 100vh;
    width: inherit;
    display: flex;
    padding: 20px;
  }
`;

class PostList extends Component {
  constructor() {
    super();
    this.listRef = React.createRef();
  }

  render() {
    return (
      // The listdDisplay attribute is getting the reference from props to display the list of posts
      <PostWrapper listDisplay={`${this.props.showList}`}>
        {posts.map(post => (
          <Link to={`/blog/${post.alt}`} onClick={() => this.props.toggleList()}>
            <li key={post.id}>{post.title}</li>
          </Link>
        ))}
      </PostWrapper>
    );
  }
}

export default PostList;
