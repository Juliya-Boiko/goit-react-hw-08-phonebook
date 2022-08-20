import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logoutUser } from "redux/auth-operations";
import { getUserName } from "redux/auth-selectors";

export const UserMenu = () => {

    const dispatch = useDispatch();
    const name = useSelector(getUserName);
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logoutUser());
        navigate('/', { replace: true });
    }

    return (
            <div>
                Hello, {name} !
                <button type="button" onClick={logoutHandler}>Log out</button>
            </div> 
    );
}