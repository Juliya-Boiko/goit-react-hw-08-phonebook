export const ContactsPage = () => {

    const addHandler = (evt) => {
        evt.preventDefault();
        const formElements = evt.target.elements;
        const newContact = {
            name: formElements.newtel.value,
            password: formElements.newname.value
        };
        console.log(newContact);
    }
    
    return (
        <form onSubmit={addHandler}>
                    <input type="text" name="newtel" placeholder="tel" />
                    <input type="text" name="newname" placeholder="name" />
                    <button type="sublit">ADD CONTACT</button>
        </form>
    );
 }