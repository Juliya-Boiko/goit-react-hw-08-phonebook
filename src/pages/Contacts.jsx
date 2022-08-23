import { useDispatch } from "react-redux";
import { addNewContactAsync } from "redux/contactsSlice";
import { AddContactForm } from "components/AddContactForm/AddContactForm";
import { ContactsList } from "components/ContactsList/ContactsList";

const Contacts = () => {
  const dispatch = useDispatch();
  
  const submitHandler = (values, { resetForm }) => {
    const contact = {
      name: values.name,
      number: values.number,
    }
    dispatch(addNewContactAsync(contact));
    resetForm();
  };

  return (
    <div>
    <p>CONTACTS PAGE</p>
      <AddContactForm onSubmit={submitHandler}/>
      <ContactsList />
    </div>
  );
};

export default Contacts;