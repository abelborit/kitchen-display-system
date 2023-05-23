import styled, { css } from "styled-components";

export const DisheCard = styled.div`
  background-color: #fff;
  z-index: 1;
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 1.5rem 1rem;
  overflow: hidden;
  border-top: 3px solid #ff0f7b;
  border-radius: 12px;
  gap: 1.5rem;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    color: #333;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content .heading {
    text-align: center;
    width: 90%;
    align-self: center;
    font-weight: bold;
    font-style: italic;
    letter-spacing: 2px;
    font-size: 1.6rem;
    border-bottom: 2px solid #ff0f7b;
    padding-bottom: 5px;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .infoText {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .content .info {
    text-align: center;
    width: 100%;
    align-self: center;
    font-size: 1rem;
    transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .contentBtn {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    text-align: center;
    width: 100%;

    .btn {
      padding: 12px 22px;
      cursor: pointer;
      border: none;
      border-radius: 12px;
      color: #efefef;
      z-index: 1;
      background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
      position: relative;
      font-weight: bold;
      font-size: 0.8rem;
      transition: all 250ms;
      overflow: hidden;
      outline: 2px solid transparent;
    }

    .selectNumberText {
      color: #ff0f7b;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    z-index: -1;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover::before {
    height: 100%;
  }

  &:hover {
    box-shadow: none;
  }

  &:hover .content .heading {
    width: 120%;
    border-bottom: 2px solid #eee;
  }

  &:hover .content {
    color: #eee;
  }

  &:hover .contentBtn .btn {
    color: #333;
    background: #eee;
  }

  &:hover .contentBtn .selectNumberText {
    color: #222;
  }

  .contentBtn .btn:hover {
    outline: 2px solid #eee;
    background: rgba(100, 100, 100, 0.2);
    color: #eee;
  }

  .contentBtn .btn:active {
    box-shadow: none;
  }
`;

/* ************************************************************************************************************************ */
interface DashboardOrderCard {
  orderState: string;
}

export const DashboardOrderCard = styled.div<DashboardOrderCard>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 1.5rem 1rem;
  overflow: hidden;
  border-radius: 12px;
  gap: 1.5rem;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

  ${(props) =>
    props.orderState === "PENDIENTE" &&
    css`
      background-color: #fff;
    `}

  ${(props) =>
    props.orderState === "EMPEZADO" &&
    css`
      background-color: rgba(23, 162, 184, 0.35);
    `}

  ${(props) =>
    props.orderState === "TERMINADO" &&
    css`
      background-color: rgba(40, 167, 69, 0.35);
    `}

  ${(props) =>
    props.orderState === "CANCELADO" &&
    css`
      background-color: rgba(220, 53, 69, 0.35);
    `}

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    color: #333;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content .heading {
    text-align: center;
    width: 110%;
    align-self: center;
    font-weight: bold;
    font-style: italic;
    letter-spacing: 4px;
    font-size: 1rem;
    border-bottom: 2px solid #ff0f7b;
    padding-bottom: 5px;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .infoText {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .content .info {
    text-align: center;
    width: 100%;
    align-self: center;
    font-size: 1rem;
    transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .contentBtn {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    text-align: center;
    width: 100%;

    .btn {
      background-color: transparent;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    z-index: 1;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    z-index: 1;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .contentBtn .btn:hover {
    transform: scale(1.15);
  }
`;
