import { useSelector } from "react-redux";
import { getLogging } from "redux/auth/auth-selectors";
import { Navigate } from "react-router";
import { ContactsPage } from "pages/ContactsPage";

export const PrivateRoute = () => {
    const isLoggedIn = useSelector(getLogging);

    return (
        <div>
            PrivateRoute
            {isLoggedIn
                ? <ContactsPage />
                : <Navigate
                    to='/login'
                    replace={true} />
            }
        </div>
    );
}