import { useSelector, useDispatch } from "react-redux";
import { getAllContactsAsync } from "redux/contacts/cont-operations";
import { useEffect } from "react";
import { getItems } from "redux/contacts/cont-selectors";
import { ContactCard } from "./ContactCard";
import { fetchEditContact } from "api/axios";

export const ContactsList = () => {
    const dispatch = useDispatch();
    const items = useSelector(getItems);

  useEffect(() => {
    dispatch(getAllContactsAsync());
  }, [dispatch]);

  // console.log(fetchEditContact({
  //   id: '6303dec88aa5ec001529fe3c',
  //   name: 'fff',
  //   number: '444'
  // }));
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