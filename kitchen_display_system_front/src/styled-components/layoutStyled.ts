import styled from "styled-components";

export const LayoutContainer = styled.div`
  min-height: 100vh;
  margin: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 300px));
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ViewContainer = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;

  &.vanishIn {
    -webkit-animation-name: vanishIn;
    -webkit-animation-duration: 0.5s;
    animation-name: vanishIn;
    animation-duration: 0.5s;
  }

  @-webkit-keyframes vanishIn {
    0% {
      opacity: 0;
      transform-origin: 50% 50%;
      transform: scale(1, 1);
      filter: blur(90px);
    }
    100% {
      opacity: 1;
      transform-origin: 50% 50%;
      transform: scale(1, 1);
      filter: blur(0px);
    }
  }

  @keyframes vanishIn {
    0% {
      opacity: 0;
      transform-origin: 50% 50%;
      transform: scale(1, 1);
      filter: blur(90px);
    }
    100% {
      opacity: 1;
      transform-origin: 50% 50%;
      transform: scale(1, 1);
      filter: blur(0px);
    }
  }
`;

export const ContainerSendData = styled.div`
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
`;

export const NoDataFilter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  p {
    text-align: center;
    font-size: 1.5rem;
    color: #333;
  }

  svg {
    width: 10rem;
    height: 10rem;
    fill: rgba(248, 155, 41, 1);
  }
`;
