//import { useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { getAllContacts, addNewContact } from "redux/contacts/cont-operations";

const ContactsPage = () => {
    //const dispatch = useDispatch();
    //const items = useSelector(state => state.contacts.items);

    const addHandler = (evt) => {
        evt.preventDefault();
        // const formElements = evt.target.elements;
        // const newContact = {
        //     name: formElements.name.value,
        //     number: formElements.number.value
        // };
        //console.log(newContact);
        //dispatch(addNewContact(newContact));
    }

    // useEffect(() => { 
    //     dispatch(getAllContacts());
    // }, []);
    
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
                <input type="text" name="name" placeholder="tel" />
                <input type="text" name="number" placeholder="name" />
                <button type="sublit">ADD CONTACT</button>
            </form>
            {/* {items.length === 0 && <p>contacts list is empty</p>}
            {items.length > 0 && 
                <ul>
                    {items.map(({ id, name, number }) => {
                        return (
                            <li key={id}>
                                <p>Name: {name}</p>
                                <p>Number: {number}</p>
                            </li>
                        );
                    })}
                </ul>
            } */}
        </div>
    );
};
export default ContactsPage;