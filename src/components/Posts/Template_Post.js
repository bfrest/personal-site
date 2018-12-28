import React, { Component } from "react";
import styled from "styled-components";

const PostWrapper = styled.div`
  width: 100%;
  text-align: left;
  margin: 40px 0 0 0;

  i {
    color: lightgray;
  }

  h3 {
    font-family: sans-serif;
    background: #ff9f43;
    padding: 5px;
  }

  .code-sample {
    width: 50%;
    border-radius: 5%;
  }

  @media (min-width: 1200px) {
    margin: 40px 0 0 170px;
  }
`;

class Post extends Component {
  render() {
    return (
      <PostWrapper>
        <h1>Test Blog Title</h1>

        <i className="post-date">December 6, 2018</i>

        <h3 className="post-content">This is a work in progress</h3>
        <p>
          Commodi dolor doloribus recusandae esse quaerat et inventore praesentium unde id quidem doloremque, libero, saepe consequuntur harum sequi fugiat mollitia dolore aut
          tempore. Nulla ipsa dolore dolorum quo illum consectetur. Voluptate voluptatem quasi fuga. Tempore consequatur suscipit possimus eius rem delectus illum beatae dolores
          quae saepe eveniet quibusdam, laboriosam facilis omnis cupiditate alias soluta at eaque unde a maxime sit? Voluptatibus magni labore vel dicta incidunt quasi blanditiis
          est, ullam cupiditate suscipit animi, sed nesciunt, numquam atque molestiae? Aspernatur quam consectetur fugit reiciendis consequuntur ex molestias asperiores voluptates
          velit veritatis.
        </p>
        <div>
          <img className="code-sample" src="https://res.cloudinary.com/bfrest/image/upload/v1544104724/random.png" alt="code sample" />
        </div>
        <p>
          Nobis fuga veritatis dolorum cum tenetur vitae nisi impedit officia ratione architecto sunt consequatur nam exercitationem repellat dignissimos, maxime aliquam libero
          fugit asperiores ullam. Quia iste dolorum dolor non mollitia. Reprehenderit, recusandae dolorum. Nihil inventore deleniti labore expedita similique! Nisi praesentium
          tempore minus corporis rerum excepturi veritatis deleniti, laudantium, veniam incidunt iusto architecto? Neque iure tenetur obcaecati saepe exercitationem alias? Impedit,
          reprehenderit consequuntur? Consequatur quaerat voluptatem facere non voluptate vel eius mollitia, sequi totam exercitationem autem eligendi ratione laborum deleniti
          excepturi architecto numquam aperiam fuga distinctio. Dignissimos eligendi sequi placeat!
        </p>
      </PostWrapper>
    );
  }
}

export default Post;
