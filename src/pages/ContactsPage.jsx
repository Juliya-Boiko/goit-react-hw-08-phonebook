import { ContactsList } from "components/ContactsList";
import { useDispatch } from "react-redux";
import { addNewContactAsync } from "redux/contacts/cont-operations";

const ContactsPage = () => {
    const dispatch = useDispatch();
   
    const addHandler = (evt) => {
        evt.preventDefault();

        const form = evt.target.elements;
        const contact = {
            name: form.name.value,
            number: form.number.value,
        }
        dispatch(addNewContactAsync(contact));

    }

    return (
        <div>
            <p>CONTACTS LIST</p>
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onSubmit={addHandler}>
                <input type="text" name="name" placeholder="name" />
                <input type="text" name="number" placeholder="number" />
                <button type="sublit">ADD CONTACT</button>
            </form>
            <ContactsList />
        </div>
    );
};
export default ContactsPage;