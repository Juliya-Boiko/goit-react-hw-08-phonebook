import { Formik } from "formik";
import { LoginFormm, LoginInput } from "./LoginForm.styled";
import { PrimaryButton } from "components/common/PrimaryButton.styled";
import { loginUser } from "redux/authSlice";
import { useRedux } from "hooks/useRedux";
import { Navigate } from "react-router";

export const LoginForm = () => {
  const [_, dispatch] = useRedux();

  const submitHandler = (values) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginUser(user));
    <Navigate to="contacts" replace={true} />
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={submitHandler}
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