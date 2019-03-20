import styled from "styled-components";
import "../gradient.svg";

export const PostWrapper = styled.div`
  width: 100%;
  text-align: left;
  font-size: 1.3em;
  line-height: 1.9em;
  padding: 80px 0;

  p {
    padding: 0 10px;
  }

  h3 {
    text-decoration: underline;
    padding: 0 10px;
  }

  li {
    margin-left: -24px;
    font-size: 0.9em;
  }

  .code-sample {
    width: 100vw;
    margin: 0;
    padding: 0;
  }

  .small-logo {
    width: 20px;
    padding: 0 5px 0 10px;
  }

  @media (min-width: 1200px) {
    margin: 40px 0 0 270px;
    font-size: 1.2em;
    width: 70%;
    line-height: 2.2em;

    .code-sample {
      width: 110%;
    }
  }
`;
