import { useRedux } from "hooks/useRedux";
import { Navigate } from "react-router";
import { getLogging } from "redux/authSlice";

export const PrivateRoute = ({ children }) => {
  const [useSelector] = useRedux();
  const isLoggedIn = useSelector(getLogging);

  return (
    isLoggedIn
      ? children
      : <Navigate to='/login' replace={true} />
  );
};