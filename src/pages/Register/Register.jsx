import { useDispatch } from "react-redux";
import { registerUser } from "redux/authSlice";
import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { RegisterPage, RegisterTitle } from "./Register.styled";

const Register = () => {
  const dispatch = useDispatch();

  const submitHandler = (values) => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(registerUser(user));
  };

  return (
    <RegisterPage>
      <RegisterTitle>For creating youre own contacts list please register</RegisterTitle>
      <RegisterForm onSubmit={submitHandler} />
    </RegisterPage>
  );
};

export default Register;