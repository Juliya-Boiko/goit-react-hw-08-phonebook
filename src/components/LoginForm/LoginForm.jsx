import { Formik } from "formik";
import { LoginFormm, LoginInput } from "./LoginForm.styled";

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
            onChange={props.handleChange}
            value={props.values.password} />
          <button type="submit">LOG IN</button>
        </LoginFormm>
      )}
    </Formik>
  );
};