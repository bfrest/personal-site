import React from "react";
import styled, { keyframes } from "styled-components";

const dropIn = keyframes`
0% {
 top: -100vh;
}
25% {
 top: 0;
}

50% {
 top: 0;
}

75% {
 top: 0;
}

100% {
 top: -100vh;
}
 `;

const fadeIn = keyframes`
 0% {
 opacity: 0;
}

25% {
 opacity: 1;
 background: rgba(100, 100, 100, 0.7);
 display: flex;
}

50% {
 opacity: 1;
 background: rgba(100, 100, 100, 0.7);
 display: flex;
}

75% {
 opacity: 1;
 background: rgba(100, 100, 100, 0.7);
 display: flex;
}

100% {
 opacity: 0;
}
 `;

const Toast = styled.div`
  margin: 200px 0 0 0;
  padding: 5px 40px;
  background: #f3f3f3;
  align-self: center;
  border-radius: 10px;
  color: #333;
  transition: all;
  animation: ${dropIn} 6s linear 1;
  position: absolute;
  top: -100vh;
`;

const Gray = styled.div`
  position: absolute;
  display: none;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 6s linear 1;
  z-index: 99;
`;

const RedesignToast = () => {
  return (
    <Gray className="gray">
      <Toast>
        <p>Currently working on a redesign.</p>
      </Toast>
    </Gray>
  );
};

export default RedesignToast;
