import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "./Modal";
import { deleteContactAsync } from "redux/contacts/cont-operations";

export const ContactCard = ({ item }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteContact = id => {
    //console.log('DELETE CONTACT!');
    dispatch(deleteContactAsync(id));
  };

  return (
    <div>
      {item.name}: {item.number}
      <button type="button" onClick={openModal}>Edit</button>
      <button type="button" onClick={() => deleteContact(item.id)}>Delete</button>
      {isModalOpen && <Modal item={item} onClose={closeModal} />}
    </div>
  );
}