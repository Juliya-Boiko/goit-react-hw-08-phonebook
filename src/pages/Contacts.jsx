import { ContactsList } from "components/ContactsList/ContactsList";
import { useDispatch } from "react-redux";
import { addNewContactAsync } from "redux/contacts/cont-operations";
import { AddForm } from "components/AddForm/AddForm";

const Contacts = () => {
  const dispatch = useDispatch();
  
  const submitHandler = (values, { resetForm }) => {
    const contact = {
      name: values.name,
      number: values.number,
    }
    dispatch(addNewContactAsync(contact));
    resetForm();
  }

  return (
    <div>
    <p>CONTACTS PAGE</p>
      <AddForm onSubmit={submitHandler}/>
      <ContactsList />
    </div>
  );
};

export default Contacts;