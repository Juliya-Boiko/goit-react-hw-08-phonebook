import { useSelector, useDispatch } from "react-redux";
import { getAllContactsAsync } from "redux/contactsSlice";
import { useEffect } from "react";
import { getItems } from "redux/contactsSlice";
import { Contact } from "components/Contact/Contact";

export const ContactsList = () => {
    const dispatch = useDispatch();
    const items = useSelector(getItems);

  useEffect(() => {
    dispatch(getAllContactsAsync());
  }, [dispatch]);

  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Contact item={item} />
          </li>
        );
      })}
    </ul>
  );
};