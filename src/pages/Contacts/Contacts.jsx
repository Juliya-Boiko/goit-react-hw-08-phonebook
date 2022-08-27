import { AddContactForm } from "components/AddContactForm/AddContactForm";
import { ContactsList } from "components/ContactsList/ContactsList";
import { ContactsPage } from "./Contacts.styled";

const Contacts = () => {

  return (
    <ContactsPage>
      <AddContactForm />
      <ContactsList />
    </ContactsPage>
  );
};

export default Contacts;