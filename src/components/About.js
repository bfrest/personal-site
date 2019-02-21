import React, { Component } from "react";
import TechList from "./TechList";
import SocialLinks from "./SocialLinks";
import styled from "styled-components";
import { WhiteBackground } from "../styleHelpers";

const FullScreen = styled.div`
  height: 100vh;
  display: inherit;
  flex-direction: column;
  align-items: center;
  color: #7e57c2;
  margin-top: 50px;

  svg {
    position: absolute;
    margin: 30.5vh 0 0 70vw;
  }
`;

const BlueBackGround = styled.div`
  background: #7e57c2;
  height: 60vh;
  width: 85%;
  padding: 50px;
  color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 70%;
    text-align: left;
    font-size: 1.4em;
  }
`;

const Created = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 900;
    font-size: 1.9em;
    text-decoration-line: underline;
    text-decoration-color: #00d2d3;
  }

  .box {
    width: 300px;
    height: 300px;
    background: #7e57c2;
  }
`;

const AboutMe = styled.div`
  color: #00d2d3;

  h1 {
    text-decoration-line: underline;
    text-decoration-color: #7e57c2;
  }

  p {
    color: #7e57c2;
  }
`;

const ListOfStuff = styled.div`
  width: 100vw;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
`;

class About extends Component {
  render() {
    return (
      <FullScreen>
        <BlueBackGround>
          <h1>Hey There!</h1>
          <p>
            My Name is Brendon Freston and I am a front end developer who values accesibility, creativity, and an innovative culture. I enjoy building useful, beautiful and fast
            digital products.
          </p>
        </BlueBackGround>
        <svg width="342" height="356" viewBox="0 0 342 356" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="171" y1="53.9797" x2="172.5" y2="90.9797" stroke="#86F2F9" />
          <line x1="247.268" y1="227.578" x2="277.268" y2="246.578" stroke="#86F2F9" />
          <line x1="97.7431" y1="227.365" x2="64.3918" y2="246.937" stroke="#86F2F9" />
          <path d="M94.3295 130.809L172.753 88.5475L247.62 130.809L170.492 176.261L94.3295 130.809Z" fill="url(#paint0_linear)" />
          <path d="M94.3295 130.809L172.753 88.5475L247.62 130.809L170.492 176.261L94.3295 130.809Z" fill="url(#paint1_linear)" />
          <path d="M170.782 176.066L247.255 132.331L247.699 228.783L171.211 274.153L170.782 176.066Z" fill="url(#paint2_linear)" />
          <path d="M170.782 176.066L247.255 132.331L247.699 228.783L171.211 274.153L170.782 176.066Z" fill="url(#paint3_linear)" />
          <path d="M170.782 176.066L247.255 132.331L247.699 228.783L171.211 274.153L170.782 176.066Z" fill="url(#paint4_linear)" />
          <path d="M170.782 176.066L247.255 132.331L247.699 228.783L171.211 274.153L170.782 176.066Z" fill="url(#paint5_linear)" />
          <path d="M93.9654 130.808L170.382 175.142L170.975 273.96L95.9099 227.969L93.9654 130.808Z" fill="url(#paint6_linear)" />
          <path d="M93.9654 130.808L170.382 175.142L170.975 273.96L95.9099 227.969L93.9654 130.808Z" fill="url(#paint7_linear)" />
          <path d="M93.9654 130.808L170.382 175.142L170.975 273.96L95.9099 227.969L93.9654 130.808Z" fill="url(#paint8_linear)" />
          <path d="M93.9654 130.808L170.382 175.142L170.975 273.96L95.9099 227.969L93.9654 130.808Z" fill="url(#paint9_linear)" />
          <path
            d="M171.093 176.995L281.307 113.06L277.782 246.741L171.093 313.04L171.093 176.995ZM61.8482 113.059L170.107 176.984L170.115 313.041L64.5887 246.75L61.8482 113.059Z"
            fill="#FFFCFC"
            fill-opacity="0.52"
            stroke="#86F2F9"
          />
          <path d="M61.3403 112.164L171.028 53.5368L281.795 112.164L170.58 176.8L61.3403 112.164Z" fill="#FFFCFC" fill-opacity="0.52" />
          <path d="M61.3403 112.164L171.028 53.5368L281.795 112.164L170.58 176.8L61.3403 112.164Z" fill="#FFFCFC" fill-opacity="0.52" />
          <path d="M61.3403 112.164L171.028 53.5368L281.795 112.164L170.58 176.8L61.3403 112.164Z" stroke="#86F2F9" />
          <defs>
            <linearGradient id="paint0_linear" x1="171" y1="121.5" x2="171.945" y2="141.956" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FA71CD" />
              <stop offset="1" stop-color="#86F2F9" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="171" y1="121.5" x2="171.945" y2="141.956" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FA71CD" />
              <stop offset="1" stop-color="#86F2F9" />
            </linearGradient>
            <linearGradient id="paint2_linear" x1="234.31" y1="224.959" x2="179.944" y2="195.245" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FA71CD" />
              <stop offset="1" stop-color="#86F2F9" />
            </linearGradient>
            <linearGradient id="paint3_linear" x1="234.31" y1="224.959" x2="179.944" y2="195.245" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FA71CD" />
              <stop offset="1" stop-color="#86F2F9" />
            </linearGradient>
            <linearGradient id="paint4_linear" x1="234.31" y1="224.959" x2="179.944" y2="195.245" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FA71CD" />
              <stop offset="1" stop-color="#86F2F9" />
            </linearGradient>
            <linearGradient id="paint5_linear" x1="234.31" y1="224.959" x2="179.944" y2="195.245" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FA71CD" />
              <stop offset="1" stop-color="#86F2F9" />
            </linearGradient>
            <linearGradient id="paint6_linear" x1="83.5" y1="222" x2="163.145" y2="181.822" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FA71CD" />
              <stop offset="1" stop-color="#86F2F9" />
            </linearGradient>
            <linearGradient id="paint7_linear" x1="83.5" y1="222" x2="163.145" y2="181.822" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FA71CD" />
              <stop offset="1" stop-color="#86F2F9" />
            </linearGradient>
            <linearGradient id="paint8_linear" x1="83.5" y1="222" x2="163.145" y2="181.822" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FA71CD" />
              <stop offset="1" stop-color="#86F2F9" />
            </linearGradient>
            <linearGradient id="paint9_linear" x1="83.5" y1="222" x2="163.145" y2="181.822" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FA71CD" />
              <stop offset="1" stop-color="#86F2F9" />
            </linearGradient>
          </defs>
        </svg>

        <Created>
          <h2>What I've Created</h2>
          <p>Here are some of the things I have built in the past.</p>

          <ListOfStuff>
            <div className="box" />
            <div className="box" />
            <div className="box" />
            <div className="box" />
            <div className="box" />
            <div className="box" />
            <div className="box" />
            <div className="box" />
          </ListOfStuff>
        </Created>

        <AboutMe>
          <h1>About Me</h1>
          <p>I love dogs</p>
        </AboutMe>
      </FullScreen>
    );
  }
}

export default About;
