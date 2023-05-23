import styled from "styled-components";

export const Button = styled.button`
  background-color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 15px;
  z-index: 1;
  border: 1px solid #f89b29;
  position: relative;
  color: #f89b29;
  font-weight: bold;
  font-size: 0.8rem;
  transition: all 250ms;
  overflow: hidden;
  /* background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%); */

  &:hover {
    border: 1px solid transparent;
    color: #fff;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 15px;
    outline: 2px solid transparent;
    background: rgba(100, 100, 100, 0.2);
    background: #ff0f7b;
    z-index: -1;
    transition: all 250ms;
  }

  &:hover::before {
    width: 100%;
  }
`;
