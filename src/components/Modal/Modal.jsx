import { useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { editContactAsync } from "redux/contactsSlice";
import { EditContactForm } from "components/EditContactForm/EditContactForm";

export const Modal = ({ item, onClose }) => {
  const dispatch = useDispatch();

  const submitHandler = (values) => {
    const contact = {
      id: item.id,
      name: values.name,
      number: values.number,
    };
    dispatch(editContactAsync(contact));
    onClose();
    <Navigate to="/contacts" />
  };

  return (
    <div>
      <EditContactForm item={item} onSubmit={submitHandler} />
      <button type="button" onClick={onClose}>
        Close modal
      </button>
    </div>
  );
}

// export const Modal = ({ onClose, src }) => {
//   useEffect(() => {
//     const handleKeyDown = e => {
//       if (e.code === 'Escape') {
//         onClose();
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [onClose]);

//   const handleBackdropClick = e => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     <ModalBackdrop onClick={handleBackdropClick}>
//       <ModalImg src={src} alt="" />
//     </ModalBackdrop>
//   );
// };