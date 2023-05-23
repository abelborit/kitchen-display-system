import styled from "styled-components";

export const BtnTableContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: space-evenly;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const BtnTableSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const BtnSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const NumberText = styled.p`
  color: #333;
  font-size: 1.3rem;
`;
