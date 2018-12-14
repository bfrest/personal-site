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

const PostsButton = styled.button`
  border-radius: 50%;
  border: none;
  color: black;
  width: 80px;
  height: 80px;
  position: fixed;
  bottom: 5vh;
  right: 2vw;
  transition: all 0.4s;
  font-size: 0.9em;
  z-index: 2;
  background: #fccf31;
  color: #111;
  &:hover {
    transform: scale(1.05);
  }
`;

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      showList: false
    };

    this.toggleList = this.toggleList.bind(this);
  }

  toggleList = () => {
    if (this.state.showList === false) {
      this.setState({ showList: true });
    } else {
      this.setState({ showList: false });
    }
  };

  render() {
    return (
      <BlogWrap>
        <ResizeContext.Consumer>
          {context => {
            // this will render the blog titles on the left of the currently selected post
            if (context.state.mainWidth > 1000 || this.state.showList === true) {
              return <PostList />;
            }

            // this will render the button for mobile that brings up the list of posts
            if (context.state.mainWidth < 1000) {
              return (
                <PostsButton type="button" onClick={() => this.toggleList()}>
                  All Posts
                </PostsButton>
              );
            }
          }}
        </ResizeContext.Consumer>
        <Post />
        {console.log(this.state.showList)}
      </BlogWrap>
    );
  }
}

export default Blog;
