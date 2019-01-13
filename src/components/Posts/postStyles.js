import styled from "styled-components";
import "../gradient.svg";

export const PostWrapper = styled.div`
  width: 100%;
  text-align: left;
  font-size: 1.3em;
  line-height: 1.9em;
  padding: 80px 20px 80px 10px;

  i {
    color: black;
    z-index: 5;
    background: ${props => (props.theme.bg === "white" ? props.theme.fc : props.theme.bg)};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-radius: 5px;
    padding: 6px;
    font-weight: 800;
    font-size: 1.4em;
  }

  h3 {
    text-decoration: underline;
  }

  li {
    margin-left: -24px;
    font-size: 0.9em;
  }

  .code-sample {
    width: 90%;
    border-radius: 10px;
    box-shadow: 1px 1px 8px 1px rgba(39, 46, 53, 0.9);
  }

  @media (min-width: 1200px) {
    margin: 40px 0 0 270px;
    font-size: 1.2em;
    width: 70%;
    line-height: 2.2em;
  }
`;
