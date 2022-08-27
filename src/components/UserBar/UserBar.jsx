import { useRedux } from "hooks/useRedux";
import { logoutUser, getUserName, getLogging } from "redux/authSlice";
import { UserBarInfo, UserName, UserActionsList, UserActionsListItem, UserActionsLink } from "./UserBar.styled";
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
        : <UserActionsList>
            <UserActionsListItem>
                <UserActionsLink to="register">Register</UserActionsLink>
            </UserActionsListItem>
            <UserActionsListItem>
                <UserActionsLink to="login">Login</UserActionsLink>
            </UserActionsListItem>
          </UserActionsList>
      }
    </>
  );
};