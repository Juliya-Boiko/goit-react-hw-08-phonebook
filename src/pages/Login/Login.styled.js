import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginTitle = styled.h1`
  margin-bottom: 20px;
  font-weight: ${p => p.theme.fontWeight.bold};
  text-align: center;
  color: ${p => p.theme.colors.white};
  font-size: 20px;

  /* @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 40px;
  } */
`;