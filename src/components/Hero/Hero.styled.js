import styled from "styled-components";

export const HeroTitle = styled.h1`
  margin-bottom: 20px;
  font-weight: ${p => p.theme.fontWeight.bold};
  text-align: center;
  color: ${p => p.theme.colors.white};
  font-size: 20px;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 40px;
  }
`;

export const HeroText = styled.p`
display: block;
  text-align: center;
  color: ${p => p.theme.colors.white};
  font-size: 14px;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    max-width: 400px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 600px;
    font-size: 20px;
  }
`;