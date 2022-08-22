import { useSelector, useDispatch } from "react-redux";
import { getAllContactsAsync } from "redux/contacts/cont-operations";
import { useEffect } from "react";
import { getItems } from "redux/contacts/cont-selectors";
import { ContactCard } from "./ContactCard";

export const ContactsList = () => {
    const dispatch = useDispatch();
    const items = useSelector(getItems);

  useEffect(() => {
    dispatch(getAllContactsAsync());
  }, [dispatch]);

  return (
    <div>
      <ul>
          {items.map((item) => {
              return (
                <li key={item.id}>
                  <ContactCard item={item} />
                </li>
          );
        })}
      </ul>
    </div>
  );
};