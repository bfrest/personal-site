import styled from "styled-components";
import "../gradient.svg";

export const PostWrapper = styled.div`
  width: 100%;
  text-align: left;
  font-size: 1.3em;
  padding: 80px 0 0 20px;
  line-height: 1.9em;
  font-size: 1.2em;

  i {
    color: black;
    z-index: 5;
    background-image: linear-gradient(to right, #abcfa5 10%, #939fd0 80%);
    border-radius: 5px;
    padding: 6px;
  }

  li {
    margin-left: -24px;
    font-size: 0.9em;
  }

  .code-sample {
    width: 90%;
  }

  @media (min-width: 1200px) {
    margin: 40px 0 0 270px;
    font-size: 1.2em;
    width: 70%;
    line-height: 2.2em;
  }
`;
