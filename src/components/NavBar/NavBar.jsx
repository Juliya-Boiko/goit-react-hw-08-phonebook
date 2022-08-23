import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getLogging } from "redux/auth/auth-selectors";

export const NavBar = () => {
  const isLogged = useSelector(getLogging);

  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {isLogged && <NavLink to="/contacts">Contacts</NavLink>}
    </div>
  );
};