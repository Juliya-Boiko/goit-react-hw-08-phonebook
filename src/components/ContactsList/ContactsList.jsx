import { useSelector, useDispatch } from "react-redux";
import { getAllContactsAsync } from "redux/contacts/cont-operations";
import { useEffect } from "react";
import { getItems } from "redux/contacts/cont-selectors";
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