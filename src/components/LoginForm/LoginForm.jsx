import { Formik, ErrorMessage } from "formik";
import { loginUser } from "redux/authSlice";
import { useRedux } from "hooks/useRedux";
import { Navigate } from "react-router";
import { logSchema } from "validationSchem/formsSchema";
import { LoginFormm, LoginInput } from "./LoginForm.styled";
import { PrimaryButton } from "components/common/PrimaryButton.styled";
import { ErrorText } from "components/common/ErrorText.styled";

export const LoginForm = () => {
  const [dispatch] = useRedux();

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
      validationSchema={logSchema}
    >
      {props => (
        <LoginFormm>
          <LoginInput
            type="text"
            name="email"
            placeholder="email"
            onChange={props.handleChange}
            value={props.values.email} />
          <ErrorMessage name="email" render={msg => <ErrorText>{msg}</ErrorText>} />
          <LoginInput
            type="password"
            name="password"
            placeholder="password"
            onChange={props.handleChange}
            value={props.values.password} />
          <ErrorMessage name="password" render={msg => <ErrorText>{msg}</ErrorText>} />
          <PrimaryButton type="submit">LOG IN</PrimaryButton>
        </LoginFormm>
      )}
    </Formik>
  );
};