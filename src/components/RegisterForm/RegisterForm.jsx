import { Formik } from "formik";
import { RegisterFormm, RegisterInput } from "./RegisterForm.styled";
import { PrimaryButton } from "components/common/PrimaryButton.styled";

export const RegisterForm = ({ onSubmit }) => {
  
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={onSubmit}
    >
      {props => (
        <RegisterFormm>
          <RegisterInput
            type="text"
            name="name"
            placeholder="name"
            onChange={props.handleChange}
            value={props.values.name} />
          <RegisterInput
            type="text"
            name="email"
            placeholder="email"
            onChange={props.handleChange}
            value={props.values.email} />
          <RegisterInput
            type="text"
            name="password"
            placeholder="password"
            onChange={props.handleChange}
            value={props.values.password} />
          <PrimaryButton type="submit">REGISTER</PrimaryButton>
        </RegisterFormm>
      )}
    </Formik>
  );
};