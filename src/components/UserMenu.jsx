import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "redux/auth-operations";
import { getLogging, getToken, getUserName } from "redux/auth-selectors";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(getUserName);
    const isLogged = useSelector(getLogging);
    const token = useSelector(getToken);
    console.log(name);
    console.log(isLogged)

    const logoutHandler = () => {
        dispatch(logoutUser());
    }

    return (
        <div>
            Hello, {name} !
            <button type="button" onClick={logoutHandler}>Log out</button>
        </div>
    );
}