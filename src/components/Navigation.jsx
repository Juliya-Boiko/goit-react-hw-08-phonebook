import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
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
        </nav>
    );
}