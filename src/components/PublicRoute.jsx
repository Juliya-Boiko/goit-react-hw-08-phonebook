import { useSelector } from "react-redux";
import { getLogging } from "redux/auth/auth-selectors";
import { Navigate } from "react-router";

export const PublicRoute = ({
    children,
    restricted = false
}) => { 
    const isLoggedIn = useSelector(getLogging);
    const redirect = isLoggedIn && restricted;
    
    return (
        redirect ? <Navigate to="/" /> : children
    );
}; 