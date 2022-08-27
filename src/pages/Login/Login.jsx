import { useDispatch } from "react-redux";
import { loginUser } from "redux/authSlice";
import { LoginForm } from "components/LoginForm/LoginForm";
import { LoginPage, LoginTitle } from "./Login.styled";

const Login = () => {
  const dispatch = useDispatch();

  const submitHandler = (values) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginUser(user));
  };

  return (
    <LoginPage>
      <LoginTitle>If you already have account, please log in</LoginTitle>
      <LoginForm onSubmit={submitHandler} />
    </LoginPage>
  );
};

export default Login;