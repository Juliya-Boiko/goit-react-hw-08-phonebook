import { Formik } from "formik";
import { LoginFormm, LoginInput } from "./LoginForm.styled";
import { PrimaryButton } from "components/common/PrimaryButton.styled";

export const LoginForm = ({ onSubmit }) => {
  
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={onSubmit}
    >
      {props => (
        <LoginFormm>
          <LoginInput
            type="text"
            name="email"
            placeholder="email"
            onChange={props.handleChange}
            value={props.values.email} />
          <LoginInput
            type="text"
            name="password"
            placeholder="password"
            onChange={props.handleChange}
            value={props.values.password} />
          <PrimaryButton type="submit">LOG IN</PrimaryButton>
        </LoginFormm>
      )}
    </Formik>
  );
};