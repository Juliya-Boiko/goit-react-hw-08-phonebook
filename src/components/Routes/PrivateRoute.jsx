import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { getLogging } from "redux/authSlice";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getLogging);

  return (
    isLoggedIn
      ? children
      : <Navigate to='/login' replace={true} />
  );
};