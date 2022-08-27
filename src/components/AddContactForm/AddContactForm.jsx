import { Notify } from "notiflix";
import { Formik } from "formik";
import { AddForm, AddInput } from "./AddContactForm.styled";
import { PrimaryButton } from "components/common/PrimaryButton.styled";
import { getItems, addNewContactAsync } from "redux/contactsSlice";
import { useRedux } from "hooks/useRedux";

export const AddContactForm = () => { 
  const [useSelector, dispatch] = useRedux();
  const items = useSelector(getItems);

  const validateContact = data => {
    const normalizedValue = data.name.toLowerCase();
    const result = items.find(item =>
      item.name.toLowerCase() === normalizedValue
    );
    return result;
  };

  const normalizedContact = str => {
    const normalizedName = str
      .split(' ')
      .map(item => item[0].toUpperCase() + item.slice(1))
      .join(' ');
    return normalizedName;
  };

  const submitHandler = (values, { resetForm }) => {
    const contact = {
      name: normalizedContact(values.name),
      number: values.number,
    }
    if (validateContact(contact)) {
      Notify.failure(`${contact.name} already exist`);
      return;
    } else {
      dispatch(addNewContactAsync(contact));
    }
    resetForm();
  };
  
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={submitHandler}
    >
      {props => (
        <AddForm>
          <AddInput
            type="text"
            name="name"
            onChange={props.handleChange}
            value={props.values.name} />
          <AddInput
            type="text"
            name="number"
            onChange={props.handleChange}
            value={props.values.number} />
          <PrimaryButton type="submit">ADD NEW CONTACT</PrimaryButton>
        </AddForm>
      )}
    </Formik>
  );
};