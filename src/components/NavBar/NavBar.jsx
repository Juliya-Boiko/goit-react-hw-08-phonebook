import { useRedux } from "hooks/useRedux";
import { NavLink } from "react-router-dom";
import { getLogging } from "redux/authSlice";

export const NavBar = () => {
  const [useSelector] = useRedux();
  const isLogged = useSelector(getLogging);

  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {isLogged && <NavLink to="/contacts">Contacts</NavLink>}
    </div>
  );
};