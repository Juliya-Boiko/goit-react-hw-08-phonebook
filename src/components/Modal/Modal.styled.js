import styled from "styled-components";
import { RiCloseFill } from "react-icons/ri";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1200;
`;

export const CloseModalButton = styled.button`
padding: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${p => p.theme.colors.white};
`;

export const CloseModalIcon = styled(RiCloseFill)`
  color: ${p => p.theme.colors.white};
`;
