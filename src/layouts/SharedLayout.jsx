import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLogging } from "redux/auth-selectors";
import { Navigation } from "components/Navigation"
import { UserMenu } from "components/UserMenu";

export const SharedLayout = () => {
    const isLogged = useSelector(getLogging);
    // console.log(isLogged);

    return (
        <div>
            <header
            style={{
                outline: '1px solid red'
            }}>
                <Navigation />
                {isLogged ? <UserMenu /> : 'NOT LOGGED'}
            </header>
            <Outlet />
        </div>
    )
}