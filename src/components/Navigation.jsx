import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getLogging } from "redux/auth/auth-selectors";
import { UserMenu } from "./UserMenu";
import { UserBar } from "components/UserBar/UserBar";

export const NavBar = () => {
    const isLogged = useSelector(getLogging);

    return (
        <div>
            <NavLink to="/">Home</NavLink>
            {isLogged && <NavLink to="/contacts">Contacts</NavLink>}
            {/* {isLogged
                ? <UserMenu />
                : <nav>
            
        </nav>} */}
        </div>
    );
}