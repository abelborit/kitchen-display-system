import styled, { css } from "styled-components";

export const HeaderStyle = styled.header`
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
  /* background: linear-gradient(
    -45deg,
    rgba(248, 155, 41, 0.75) 00%,
    rgba(255, 15, 123, 0.75) 100%
  ); */
  backdrop-filter: blur(2.5px);
  box-shadow: -10px -10px 10px -10px rgba(0, 0, 0, 0.2),
    0px 10px 10px -10px rgba(0, 0, 0, 0.2);
  width: 100%;
  padding: 0 1rem;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  &.boingInUp {
    -webkit-animation-name: boingInUp;
    animation-name: boingInUp;
    -webkit-animation-duration: 0.8s;
    animation-duration: 0.8s;
  }

  @-webkit-keyframes boingInUp {
    0% {
      opacity: 0;
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -webkit-transform: perspective(800px) rotateX(-90deg);
      transform: perspective(800px) rotateX(-90deg);
    }
    50% {
      opacity: 1;
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -webkit-transform: perspective(800px) rotateX(50deg);
      transform: perspective(800px) rotateX(50deg);
    }
    100% {
      opacity: 1;
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -webkit-transform: perspective(800px) rotateX(0deg);
      transform: perspective(800px) rotateX(0deg);
    }
  }

  @keyframes boingInUp {
    0% {
      opacity: 0;
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -webkit-transform: perspective(800px) rotateX(-90deg);
      transform: perspective(800px) rotateX(-90deg);
    }
    50% {
      opacity: 1;
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -webkit-transform: perspective(800px) rotateX(50deg);
      transform: perspective(800px) rotateX(50deg);
    }
    100% {
      opacity: 1;
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -webkit-transform: perspective(800px) rotateX(0deg);
      transform: perspective(800px) rotateX(0deg);
    }
  }

  @media screen and (min-width: 500px) {
    padding: 0 1.5rem;
  }

  @media screen and (min-width: 768px) {
    padding: 0 4rem;
  }
`;

export const NavStyle = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;

  a {
    font-size: 1rem;
    color: #444;
    font-weight: bold;
    text-align: center;
    transition: all 0.3s ease;

    svg {
      width: 2rem;
      height: 2rem;
      fill: rgba(248, 155, 41, 1);
      transition: all 0.3s ease;
    }

    :hover svg {
      transform: rotate(-90deg);
    }

    :hover {
      font-size: 1.04rem;
      color: rgba(255, 15, 123, 1);
    }
  }
`;

interface ConectedText {
  isConnected: boolean;
}

export const ConectedText = styled.p<ConectedText>`
  cursor: pointer;
  font-size: 0.9rem;
  text-align: center;
  color: #333;

  ${(props) =>
    props.isConnected &&
    css`
      color: #1ec896;
    `}
`;
