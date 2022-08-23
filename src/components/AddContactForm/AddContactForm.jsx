import { Formik } from "formik";
import { AddForm, AddInput } from "./AddContactForm.styled";
import { PrimaryButton } from "components/common/PrimaryButton.styled";

export const AddContactForm = ({ onSubmit }) => { 
  
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={onSubmit}
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