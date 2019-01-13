import React, { Component } from "react";
import styled from "styled-components";
import { posts } from "../postTitle";
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
    font-size: 1.6em;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  @media (min-width: 1200px) {
    height: 100vh;
    width: 17%;
    display: flex;
    padding: 5px;
    border-right: 1px solid #dcdcdc;
    font-size: 0.6em;
  }
`;

class PostList extends Component {
  constructor() {
    super();
    this.listRef = React.createRef();
  }

  render() {
    return (
      // The listDisplay attribute is getting the reference from props to display the list of posts
      <PostWrapper listDisplay={`${this.props.showList}`}>
        {posts.map(post => (
          // This is just creating a dynamic link to blog post based on the alt
          <Link to={`/blog/${post.alt}`} onClick={() => this.props.toggleList()}>
            <li key={post.id}>{post.title}</li>
          </Link>
        ))}
      </PostWrapper>
    );
  }
}

export default PostList;
