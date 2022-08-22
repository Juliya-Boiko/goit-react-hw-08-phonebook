import { useDispatch } from "react-redux";
import { registerUser } from "redux/auth/auth-operations";

const Registerpage = () => {
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
            <h2>REGISTER</h2>
            <form onSubmit={submitHandler}
            style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color: '#010101'
            }}> 
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" />
                <label htmlFor="email">Email</label>
                <input id="email" type="text" name="email" />
                <label htmlFor="password">Password</label>
                <input id="password" type="text" name="password" />
                <button type="submit">REGISTER</button>
            </form>
        </div>
    )
}

export default Registerpage;