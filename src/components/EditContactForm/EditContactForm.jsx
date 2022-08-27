import { Formik } from "formik";
import { useRedux } from "hooks/useRedux";
import { editContactAsync } from "redux/contactsSlice";
import { Navigate } from "react-router";
import { EditForm, EditInput } from "./EditContactForm.styled";
import { PrimaryButton } from "components/common/PrimaryButton.styled";

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
          {/* <label htmlFor="name">Name</label> */}
          <EditInput
            // id="name"
            type="text"
            name="name"
            onChange={props.handleChange}
            value={props.values.name} />
          {/* <label htmlFor="password">Number</label> */}
          <EditInput
            // id="number"
            type="text"
            name="number"
            onChange={props.handleChange}
            value={props.values.number} />
          <PrimaryButton type="submit">EDIT CONTACT</PrimaryButton>
        </EditForm>
      )}
    </Formik>
  );
};