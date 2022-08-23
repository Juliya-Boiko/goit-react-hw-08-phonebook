import { useSelector } from "react-redux";
import { getLogging } from "redux/authSlice";
import { Navigate } from "react-router";

export const PublicRoute = ({
    children,
    restricted = false
}) => { 
    const isLoggedIn = useSelector(getLogging);
    const redirect = isLoggedIn && restricted;
    
    return (
        redirect ? <Navigate to="/contacts" /> : children
    );
}; 