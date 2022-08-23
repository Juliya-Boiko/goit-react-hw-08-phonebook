import { useRedux } from "hooks/useRedux";
import { logoutUser, getUserName, getLogging } from "redux/authSlice";
import { NavLink } from "react-router-dom";
import { UserBarInfo, UserName } from "./UserBar.styled";
import { PrimaryButton } from "components/common/PrimaryButton.styled";

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
            <PrimaryButton type="button" onClick={logoutHandler}>EXIT</PrimaryButton>
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