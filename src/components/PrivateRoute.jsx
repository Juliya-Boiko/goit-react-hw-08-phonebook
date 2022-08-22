import { useSelector } from "react-redux";
import { getLogging } from "redux/auth/auth-selectors";
import { Navigate } from "react-router";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getLogging);

	return (
			isLoggedIn
				? children
				: <Navigate to='/login' replace={true} />
	);
}