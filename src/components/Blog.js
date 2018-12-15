import React, { Component } from "react";
import PostList from "./PostList";
import styled, { keyframes } from "styled-components";
//import { ResizeContext } from "../context/ResizeProvider";
import Post from "./Posts/Post";

const BlogWrap = styled.div`
  height: 100vh;
  color: black;
  display: flex;
  flex-direction: row;

  h2 {
    margin-top: 300px;
  }
`;

const Breathe = keyframes`
  0% {transform: scale(1)}
 50% {transform: scale(1.2); box-shadow: 0px 0px 12px black; margin:40px 40px; border: 4px solid black;}
 100% {transform: scale(1)}
`;

const PostsButton = styled.button`
  border-radius: 50%;
  border: none;
  color: black;
  width: 80px;
  height: 80px;
  position: fixed;
  bottom: 3vh;
  right: 4vw;
  transition: all 0.4s;
  font-size: 0.9em;
  z-index: 2;
  background: #fccf31;
  color: #111;
  animation: ${Breathe} 1s;
  box-shadow: 0px 0px 5px gray;
  border: 2px solid black;
`;

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: "none"
    };

    this.toggleList = this.toggleList.bind(this);
  }

  toggleList = () => {
    if (this.state.showList === "none") {
      this.setState({ showList: "flex" });
    } else {
      this.setState({ showList: "none" });
    }
  };

  render() {
    const { showList } = this.state;
    return (
      <BlogWrap>
        <PostList showList={showList} />
        <PostsButton type="button" onClick={() => this.toggleList()}>
          {/* inline if else statement to show different text based on state */}
          {showList === "none" ? "All Posts" : "Back"}
        </PostsButton>
      </BlogWrap>
    );
  }
}

export default Blog;
