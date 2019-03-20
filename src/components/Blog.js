import React, { Component } from "react";
import PostList from "./PostList";
import ListButton from "./ListButton";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Post from "./Posts/Template_Post";
import OpenSource from "./Posts/OpenSource";
import ConditionalRendering from "./Posts/ConditionalRendering";
import StickyNav from "./Posts/StickyNav";

const BlogWrap = styled.div`
  display: flex;
  color: #fff;
  flex-direction: row;
  background: rgb(132, 141, 255);

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
        {/* 
          This seems like a terrible way to route, 
          it was just the quickest way I thought of at the time
          I will be refactoring soon
        */}
        <Route path="/blog/first-post" component={Post} />
        <Route path="/blog/open-source" component={OpenSource} />
        <Route path="/blog/conditional-rendering" component={ConditionalRendering} />
        <Route path="/blog/sticky-nav" component={StickyNav} />
        <PostList showList={showList} toggleList={this.toggleList} />
        <ListButton showList={showList} toggleList={this.toggleList} />
      </BlogWrap>
    );
  }
}

export default Blog;
