import React, { Component } from "react";
import PostList from "./PostList";
import ListButton from "./ListButton";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Post from "./Posts/Post";
import OtherStuff from "./Posts/OtherStuff";

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
  constructor(props, match) {
    super(props, match);
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
        <Route path="/blog/first-post" component={Post} />
        <Route path="/blog/other-stuff" component={OtherStuff} />
        <PostList showList={showList} toggleList={this.toggleList} />
        <ListButton showList={showList} toggleList={this.toggleList} />
      </BlogWrap>
    );
  }
}

export default Blog;
