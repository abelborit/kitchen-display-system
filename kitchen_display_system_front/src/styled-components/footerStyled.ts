import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
  height: 2.5rem;
  color: #eee;
  gap: 5px;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);

  a {
    font-weight: bold;
    color: #333;
  }
`;
