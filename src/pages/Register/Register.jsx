import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { RegisterPage, RegisterTitle } from "./Register.styled";

const Register = () => {

  return (
    <RegisterPage>
      <RegisterTitle>For creating youre own contacts list please register</RegisterTitle>
      <RegisterForm />
    </RegisterPage>
  );
};

export default Register;