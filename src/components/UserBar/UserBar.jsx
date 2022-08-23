import { useRedux } from "hooks/useRedux";
import { NavLink } from "react-router-dom";
import { logoutUser, getUserName, getLogging } from "redux/authSlice";

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
        ? <div>
            Hello, {name} !
            <button type="button" onClick={logoutHandler}>Log out</button>
          </div> 
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