import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "redux/auth-operations";
import { getLogging } from "redux/auth-selectors";

export const Loginpage = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector(getLogging);
    //console.log(isLogged);

    const submitHandler = (evt) => {
        evt.preventDefault();
        const formElements = evt.target.elements;
        const newUser = {
            email: formElements.email.value,
            password: formElements.password.value
        };
        dispatch(loginUser(newUser));
    }

    const addHandler = (evt) => {
        evt.preventDefault();
        const formElements = evt.target.elements;
        const newContact = {
            name: formElements.newtel.value,
            password: formElements.newname.value
        };
        console.log(newContact);
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
            {isLogged && <div>
                <form onSubmit={addHandler}>
                    <input type="text" name="newtel" placeholder="tel" />
                    <input type="text" name="newname" placeholder="name" />
                    <button type="sublit">ADD CONTACT</button>
                </form>
            </div>}
        </div>
    )
}