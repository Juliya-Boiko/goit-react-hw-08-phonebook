import { useRedux } from "hooks/useRedux";
import { logoutUser, getUserName, getLogging } from "redux/authSlice";
import { NavLink } from "react-router-dom";
import { UserBarInfo, UserName, LogoutButton } from "./UserBar.styled";

export const UserBar = () => {
  const [useSelector, dispatch] = useRedux();
  const name = useSelector(getUserName);
  const isLogged = useSelector(getLogging);

  const logoutHandler = () => {
    dispatch(logoutUser());
  }
  
  return (
    <>
      {isLogged
        ? <UserBarInfo>
            <UserName>You are logged in as: {name}</UserName>
            <LogoutButton type="button" onClick={logoutHandler}>EXIT</LogoutButton>
          </UserBarInfo> 
        : <ul>
            <li>
                <NavLink to="/register">Register</NavLink>
            </li>
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
      }
    </>
  );
};