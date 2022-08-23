import { useState } from "react";
import { useRedux } from "hooks/useRedux";
import { deleteContactAsync } from "redux/contactsSlice";
import { Modal } from "components/Modal/Modal";

export const Contact = ({ item }) => { 
  const [_, dispatch] = useRedux();
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