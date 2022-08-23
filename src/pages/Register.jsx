import { useDispatch } from "react-redux";
import { registerUser } from "redux/auth/auth-operations";
import { RegisterForm } from "components/RegisterForm/RegisterForm";

const Register = () => {
    const dispatch = useDispatch();

    const submitHandler = (evt) => {
        evt.preventDefault();
        const formElements = evt.target.elements;
        const newUser = {
            name: formElements.name.value,
            email: formElements.email.value,
            password: formElements.password.value
        };
        dispatch(registerUser(newUser)); 
    }

    return (
        <div>
            <h2>REGISTER PAGE</h2>
            <RegisterForm onSubmit={submitHandler} />
        </div>
    )
}

export default Register;