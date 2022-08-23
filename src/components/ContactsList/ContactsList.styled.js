import styled from "styled-components";

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  border-bottom: 1px solid ${p => p.theme.colors.white};
  font-size: 20px;
  color: ${p => p.theme.colors.white};

  @media screen and (max-width: 640px) {
    font-size: 14px;
  }
`;