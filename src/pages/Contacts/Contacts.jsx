import { AddContactForm } from "components/AddContactForm/AddContactForm";
import { ContactsList } from "components/ContactsList/ContactsList";
import { ContactsPage } from "./Contacts.styled";
import { Filter } from "components/Filter/Filter";

const Contacts = () => {
  return (
    <ContactsPage>
      <AddContactForm />
      <div>
        <Filter />
        <ContactsList />
      </div>
    </ContactsPage>
  );
};

export default Contacts;