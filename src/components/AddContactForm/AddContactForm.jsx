import { Notify } from "notiflix";
import { Formik, ErrorMessage } from "formik";
import { getItems, addNewContactAsync } from "redux/contactsSlice";
import { useRedux } from "hooks/useRedux";
import { formShema } from "components/common/formShema";
import { AddForm } from "./AddContactForm.styled";
import { ErrorText } from "components/common/ErrorText.styled";
import { Input } from "components/common/Input.styled.";
import { PrimaryButton } from "components/common/PrimaryButton.styled";

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
      validationSchema={formShema}
    >
      {props => (
        <AddForm>
          <Input
            type="text"
            name="name"
            placeholder="name"
            onChange={props.handleChange}
            value={props.values.name} />
          <ErrorMessage name="name" render={msg => <ErrorText>{msg}</ErrorText>} />
          <Input
            type="tel"
            name="number"
            placeholder="number"
            onChange={props.handleChange}
            value={props.values.number} />
          <ErrorMessage name="number" render={msg => <ErrorText>{msg}</ErrorText>} />
          <PrimaryButton type="submit">ADD NEW CONTACT</PrimaryButton>
        </AddForm>
      )}
    </Formik>
  );
};