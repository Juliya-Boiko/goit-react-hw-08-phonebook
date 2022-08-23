import { useEffect } from "react";
import { useRedux } from "hooks/useRedux";
import { getItems, getAllContactsAsync } from "redux/contactsSlice";
import { Contact } from "components/Contact/Contact";
import { ContactListItem } from "./ContactsList.styled";

export const ContactsList = () => {
  const [useSelector, dispatch] = useRedux();
  const items = useSelector(getItems);

  useEffect(() => {
    dispatch(getAllContactsAsync());
  }, [dispatch]);

  return (
    <ul>
      {items.map((item) => {
        return (
          <ContactListItem key={item.id}>
            <Contact item={item} />
          </ContactListItem>
        );
      })}
    </ul>
  );
};