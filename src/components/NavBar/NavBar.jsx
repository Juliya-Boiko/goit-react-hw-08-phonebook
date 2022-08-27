import { useRedux } from "hooks/useRedux";
import { getLogging } from "redux/authSlice";
import { NavBarList, NavBarItem, NavBarLink, NavBarIcon } from "./NavBar.styled";

export const NavBar = () => {
  const [useSelector] = useRedux();
  const isLogged = useSelector(getLogging);

  return (
    <NavBarList>
      <NavBarItem>
        <NavBarLink to="/"><NavBarIcon size="30px" /></NavBarLink>
      </NavBarItem>
      {isLogged && <NavBarItem><NavBarLink to="contacts">Contacts</NavBarLink></NavBarItem>}
    </NavBarList>
  );
};