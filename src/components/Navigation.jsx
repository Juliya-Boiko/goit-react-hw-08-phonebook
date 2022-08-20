import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getLogging } from "redux/auth-selectors";
import { UserMenu } from "./UserMenu";

export const Navigation = () => {
    const isLogged = useSelector(getLogging);

    return (
        <div>
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
                    <NavLink to="/">Home</NavLink>
                </li>
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