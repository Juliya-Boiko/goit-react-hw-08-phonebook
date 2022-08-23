import styled from "styled-components";

export const UserBarInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.p`
  margin-right: 10px;
  font-size: 14px;
  color: ${p => p.theme.colors.white};

  @media screen and (max-width: 425px) {
    font-size: 9px;
  }
`;