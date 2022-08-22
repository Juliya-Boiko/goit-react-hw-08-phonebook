import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "layouts/SharedLayout";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { getUserData } from "redux/auth/auth-operations";
import { PublicRoute } from "components/PublicRoute";
import { PrivateRoute } from "components/PrivateRoute";

const ContactsPage = lazy(() => import('pages/ContactsPage'));
const Homepage = lazy(() => import('pages/Homepage'));
const Loginpage = lazy(() => import('pages/Loginpage'));
const Registerpage = lazy(() => import('pages/Registerpage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              path="/"
              element={
                <PublicRoute>
                <Homepage />
                </PublicRoute>} />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                <Loginpage />
                </PublicRoute>} />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <Registerpage />
                </PublicRoute>} />
            <Route
              path='contacts'
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>} />
            <Route path="*" element={<Homepage />} />
          </Route>
        </Routes>
        </Suspense>
    </div>
  );
};
