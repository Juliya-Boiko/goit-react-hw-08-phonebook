import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { getLogging } from "redux/authSlice";

export const PublicRoute = ({ children, restricted = false }) => { 
  const isLoggedIn = useSelector(getLogging);
  const redirect = isLoggedIn && restricted;
  
  return (
    redirect ? <Navigate to="/contacts" /> : children
  );
}; 