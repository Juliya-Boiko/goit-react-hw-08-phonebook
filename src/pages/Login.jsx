import { useDispatch } from "react-redux";
import { loginUser } from "redux/auth/auth-operations";
import { LoginForm } from "components/LoginForm/LoginForm";

const Login = () => {
  const dispatch = useDispatch();

  const submitHandler = (values) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginUser(user));
  }

  return (
    <div>        
      <h2>LOG IN</h2>
      <LoginForm onSubmit={submitHandler} />
    </div>
  );
}

export default Login;