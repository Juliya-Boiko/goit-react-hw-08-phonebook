import { useSelector, useDispatch } from "react-redux";
import { deleteContactAsync, getAllContactsAsync } from "redux/contacts/cont-operations";
import { useEffect } from "react";
import { getItems } from "redux/contacts/cont-selectors";

export const ContactsList = () => {
    const dispatch = useDispatch();
    const items = useSelector(getItems);

    useEffect(() => {
        dispatch(getAllContactsAsync());
    }, [dispatch]) 

  const deleteContact = id => {
    console.log('DELETE CONTACT!');
    dispatch(deleteContactAsync(id));
  };

  return (
    <ul>
        {items.map(({id, name, number}) => {
            return (
                <li key={id}>
                    {name}: {number}
                    <button type="button" onClick={() => deleteContact(id)}>Delete</button>
                </li>
        );
      })}
    </ul>
  );
};