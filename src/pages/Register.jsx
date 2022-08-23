import { useDispatch } from "react-redux";
import { registerUser } from "redux/auth/auth-operations";
import { RegisterForm } from "components/RegisterForm/RegisterForm";

const Register = () => {
    const dispatch = useDispatch();

    const submitHandler = (values) => {
        const user = {
            name: values.name,
            email: values.email,
            password: values.password,
        };
        dispatch(registerUser(user)); 
    }

    return (
        <div>
            <h2>REGISTER PAGE</h2>
            <RegisterForm onSubmit={submitHandler} />
        </div>
    )
}

export default Register;