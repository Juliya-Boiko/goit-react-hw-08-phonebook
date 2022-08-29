import { Formik, ErrorMessage } from "formik";
import { RegisterFormm, RegisterInput } from "./RegisterForm.styled";
import { PrimaryButton } from "components/common/PrimaryButton.styled";
import { useRedux } from "hooks/useRedux";
import { registerUser } from "redux/authSlice";
import { Navigate } from "react-router";
import { registerSchema } from "validationSchem/formsSchema";
import { ErrorText } from "components/common/ErrorText.styled";

export const RegisterForm = () => {
  const [dispatch] = useRedux();

  const submitHandler = (values) => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(registerUser(user));
    <Navigate to="contacts" replace={true}/>
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={submitHandler}
      validationSchema={registerSchema}
    >
      {props => (
        <RegisterFormm>
          <RegisterInput
            type="text"
            name="name"
            placeholder="name"
            onChange={props.handleChange}
            value={props.values.name} />
          <ErrorMessage name="name" render={msg => <ErrorText>{msg}</ErrorText>} />
          <RegisterInput
            type="text"
            name="email"
            placeholder="email"
            onChange={props.handleChange}
            value={props.values.email} />
          <ErrorMessage name="email" render={msg => <ErrorText>{msg}</ErrorText>} />
          <RegisterInput
            type="password"
            name="password"
            placeholder="password"
            onChange={props.handleChange}
            value={props.values.password} />
          <ErrorMessage name="password" render={msg => <ErrorText>{msg}</ErrorText>} />
          <PrimaryButton type="submit">REGISTER</PrimaryButton>
        </RegisterFormm>
      )}
    </Formik>
  );
};