import styled from "styled-components";
import { RiHome2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export const NavBarList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavBarItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }

  @media screen and (min-width: 480px) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
`;

export const NavBarIcon = styled(RiHome2Line)`
  color: ${p => p.theme.colors.white};
`;

export const NavBarLink = styled(NavLink)`
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeight.bold};
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};
`;