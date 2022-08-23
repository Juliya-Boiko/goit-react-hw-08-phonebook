import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PublicRoute } from "components/PublicRoute";
import { PrivateRoute } from "components/PrivateRoute";
import { AppBar } from "components/AppBar/AppBar";
import { getUserData } from "redux/auth/auth-operations";
import { getRefreshing } from "redux/auth/auth-selectors";

const Contacts = lazy(() => import('pages/Contacts'));
const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getRefreshing);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <div>
      {isRefreshing
        ? <p>LOADIND...</p>
        : <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/" element={<AppBar />}>
                <Route index path="/"
                  element={<PublicRoute><Home /></PublicRoute>} />
                <Route path="/login"
                  element={<PublicRoute restricted><Login /></PublicRoute>} />
                <Route path="/register"
                  element={<PublicRoute restricted><Register /></PublicRoute>} />
                <Route path='/contacts'
                  element={<PrivateRoute><Contacts /></PrivateRoute>} />
                <Route path="*" element={<Home />} />
              </Route>
            </Routes>
          </Suspense>}
    </div>
  );
};
