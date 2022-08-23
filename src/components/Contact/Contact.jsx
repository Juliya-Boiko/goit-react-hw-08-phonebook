import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContactAsync } from "redux/contactsSlice";
import { Modal } from "components/Modal/Modal";

export const Contact = ({ item }) => { 
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteContact = id => {
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
};