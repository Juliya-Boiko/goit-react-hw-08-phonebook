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

export const LogoutButton = styled.button`
display: block;
padding: 5px 20px;
border: none;
border-radius: 2px;
outline: 1px solid ${p => p.theme.colors.white};
background-color: transparent;
color: ${p => p.theme.colors.white};

@media screen and (max-width: 425px) {
  padding: 3px 10px;
  font-size: 9px;
}
`;