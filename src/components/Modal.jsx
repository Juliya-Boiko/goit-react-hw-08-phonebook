import { useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { editContactAsync } from "redux/contacts/cont-operations";

export const Modal = ({ item, onClose }) => {
  const dispatch = useDispatch();

  const editContact = (evt) => {
    evt.preventDefault();
    const form = evt.target.elements;
    const contact = {
      id: item.id,
      name: form.name.value,
      number: form.number.value,
    };
    dispatch(editContactAsync(contact));
    onClose();
    <Navigate to="/contacts" />
  };

  return (
    <div>
      <form onSubmit={editContact}>
        <input type="text" name="name" placeholder={item.name} />
        <input type="text" name="number" placeholder={item.number} />
        <button type="submit">UPDATE CONTACT</button>
      </form>
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