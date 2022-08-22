import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getLogging } from "redux/auth/auth-selectors";
import { UserMenu } from "./UserMenu";

export const Navigation = () => {
    const isLogged = useSelector(getLogging);

    return (
        <div>
            <NavLink to="/">Home</NavLink>
            {isLogged && <NavLink to="/contacts">Contacts</NavLink>}
            {isLogged
                ? <UserMenu />
                : <nav>
            <ul
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 20,
                color: '#010101'
            }}>
                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>}
        </div>
    );
}