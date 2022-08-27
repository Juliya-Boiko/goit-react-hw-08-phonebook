import { LoginForm } from "components/LoginForm/LoginForm";
import { LoginPage, LoginTitle } from "./Login.styled";

const Login = () => {

  return (
    <LoginPage>
      <LoginTitle>If you already have account, please log in</LoginTitle>
      <LoginForm />
    </LoginPage>
  );
};

export default Login;