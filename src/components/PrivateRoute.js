import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { getLogging } from "redux/auth-selectors";

 const PrivateRoute = ({ children, routeProps }) => {
    const isLogged = useSelector(getLogging);
    console.log(isLogged);

    return (
        <Route {...routeProps}>
            {/* {isLogged ? children : <Redirect to="/login" />} */}
        </Route>);
 };

export default PrivateRoute;