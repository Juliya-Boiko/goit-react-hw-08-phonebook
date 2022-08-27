import styled from "styled-components";

export const ContactButton = styled.button`
  display: inline-block;
  margin: 0 3px;
  padding: 3px;
  border: none;
  background-color: transparent;
  color: ${p => p.theme.colors.white};
  cursor: pointer;
`;