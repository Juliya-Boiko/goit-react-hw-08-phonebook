import styled from "styled-components";

export const ContactsPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 40px 0 0 0;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;