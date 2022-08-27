
import { useEffect } from "react";
import { EditContactForm } from "components/EditContactForm/EditContactForm";
import { ModalBackdrop, CloseModalButton, CloseModalIcon } from "./Modal.styled";

export const Modal = ({ item, onClose }) => {

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <CloseModalButton type="button" onClick={onClose}>
        <CloseModalIcon size="30px" />
      </CloseModalButton>
      <EditContactForm item={item} onClose={onClose} />
    </ModalBackdrop>
  );
};






  // return (
  //   <ModalBackdrop onClick={handleBackdropClick}>
  //     <ModalImg src={src} alt="" />
  //   </ModalBackdrop>
  // );