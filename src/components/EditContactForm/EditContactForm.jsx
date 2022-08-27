import { Formik } from "formik";
import { useRedux } from "hooks/useRedux";
import { editContactAsync } from "redux/contactsSlice";
import { Navigate } from "react-router";
import { EditForm, EditInput } from "./EditContactForm.styled";
import { SecondaryButton } from "components/common/SecondaryButton";

export const EditContactForm = ({ item, onClose }) => {
  const [_, dispatch] = useRedux();

  const submitHandler = (values) => {
    const contact = {
      id: item.id,
      name: values.name,
      number: values.number,
    };
    dispatch(editContactAsync(contact));
    onClose();
    <Navigate to="/contacts" />
  };
  
  return (
    <Formik
      initialValues={{ name: item.name, number: item.number }}
      onSubmit={submitHandler}
    >
      {props => (
        <EditForm>
          <EditInput
            type="text"
            name="name"
            onChange={props.handleChange}
            value={props.values.name} />
          <EditInput
            type="text"
            name="number"
            onChange={props.handleChange}
            value={props.values.number} />
          <SecondaryButton type="submit">EDIT CONTACT</SecondaryButton>
        </EditForm>
      )}
    </Formik>
  );
};