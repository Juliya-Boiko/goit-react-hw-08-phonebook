import { useRedux } from "hooks/useRedux";
import { Navigate } from "react-router";
import { getLogging } from "redux/authSlice";

export const PublicRoute = ({ children, restricted = false }) => { 
  const [useSelector] = useRedux();
  const isLoggedIn = useSelector(getLogging);
  const redirect = isLoggedIn && restricted;
  
  return (
    redirect ? <Navigate to="/" /> : children
  );
}; 