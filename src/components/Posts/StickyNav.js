import React, { Component } from "react";
import { PostWrapper } from "./postStyles";
import styled from "styled-components";

const Sticky = styled.div``;

const HoneyWrapper = styled.div`
  .honey {
    top: 0;
    left: 0;
    position: sticky;
    background: white;
    color: #ffe685;
  }
`;

class StickyNav extends Component {
  constructor() {
    super();
    this.honeyRef = React.createRef();
    this.handleHoney = this.handleHoney.bind(this);
  }

  handleHoney = () => {
    // ! Fix the janky scroll on mobile
    const topOfHoney = this.honeyRef.current.getBoundingClientRect().top;

    if (this.honeyRef.current.classList[1] !== "honey") {
      if (topOfHoney <= 0) {
        // adds the sticky styles
        this.honeyRef.current.classList.add("honey");
      } else {
        // removes the sticky styles
        this.honeyRef.current.classList.remove("honey");
      }
    }
  };

  render() {
    window.addEventListener("scroll", () => {
      this.handleHoney();
    });

    return (
      <PostWrapper>
        <HoneyWrapper>
          {/* This should become sticky once it hits the top */}

          <Sticky ref={this.honeyRef}>
            <h1>🍯 Sticky Nav 🍯</h1>
          </Sticky>

          <p>
            <i className="post-date">March, 17 2019</i>
          </p>

          <h3 className="post-content">This is a work in progress</h3>
          <p>
            Commodi dolor doloribus recusandae esse quaerat et inventore praesentium unde id quidem doloremque, libero, saepe consequuntur harum sequi fugiat mollitia dolore aut
            tempore. Nulla ipsa dolore dolorum quo illum consectetur. Voluptate voluptatem quasi fuga. Tempore consequatur suscipit possimus eius rem delectus illum beatae dolores
            quae saepe eveniet quibusdam, laboriosam facilis omnis cupiditate alias soluta at eaque unde a maxime sit? Voluptatibus magni labore vel dicta incidunt quasi blanditiis
            est, ullam cupiditate suscipit animi, sed nesciunt, numquam atque molestiae? Aspernatur quam consectetur fugit reiciendis consequuntur ex molestias asperiores
            voluptates velit veritatis.
          </p>
          <div>
            <img className="code-sample" src="https://res.cloudinary.com/bfrest/image/upload/v1544104724/random.png" alt="code sample" />
          </div>
          <p>
            Nobis fuga veritatis dolorum cum tenetur vitae nisi impedit officia ratione architecto sunt consequatur nam exercitationem repellat dignissimos, maxime aliquam libero
            fugit asperiores ullam. Quia iste dolorum dolor non mollitia. Reprehenderit, recusandae dolorum. Nihil inventore deleniti labore expedita similique! Nisi praesentium
            tempore minus corporis rerum excepturi veritatis deleniti, laudantium, veniam incidunt iusto architecto? Neque iure tenetur obcaecati saepe exercitationem alias?
            Impedit, reprehenderit consequuntur? Consequatur quaerat voluptatem facere non voluptate vel eius mollitia, sequi totam exercitationem autem eligendi ratione laborum
            deleniti excepturi architecto numquam aperiam fuga distinctio. Dignissimos eligendi sequi placeat!
          </p>
        </HoneyWrapper>
      </PostWrapper>
    );
  }
}

export default StickyNav;
