import styled, { keyframes } from "styled-components";

const Breathe = keyframes`
  0%  {box-shadow: 0 0 30px #00FF00;}
  50%  {box-shadow: 0 0 30px #CCFF00;}
 100% {box-shadow: 0 0 30px #00FF00;}
`;

export const WhiteBackground = styled.div`
  background: white;
  padding: 35px;
  align-self: center;
  border-radius: 15px;
  animation: ${Breathe} infinite;
  animation-duration: 8s;
`;
