import { useDispatch } from "react-redux";
import { loginUser } from "redux/auth-operations";
import { useNavigate } from "react-router";

 const Loginpage = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();

    const submitHandler = (evt) => {
        evt.preventDefault();
        const formElements = evt.target.elements;
        const newUser = {
            email: formElements.email.value,
            password: formElements.password.value
        };
        dispatch(loginUser(newUser));
        navigate('/contacts', { replace: true });
    }

    return (
        <div>
            <h2>LOG IN</h2>
            <form onSubmit={submitHandler}
            style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color: '#010101'
            }}> 
                <label htmlFor="email">Email</label>
                <input id="email" type="text" name="email" />
                <label htmlFor="password">Password</label>
                <input id="password" type="text" name="password" />
                <button type="submit">LOG IN</button>
            </form>
        </div>
    )
 }

export default Loginpage;