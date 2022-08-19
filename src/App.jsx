import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "layouts/SharedLayout";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { getUserData } from "redux/auth-operations";

const Homepage = lazy(() => import('pages/Homepage'));
const Loginpage = lazy(() => import('pages/Loginpage'));
const Registerpage = lazy(() => import('pages/Registerpage'));
// const ContactsData = lazy(() => import('components/ContactsData'));

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
            <Route index element={<Homepage />} />
            <Route path="login" element={<Loginpage />} />
            <Route path="register" element={<Registerpage />} />
            
            
              {/* <PrivateRoute path="/contacts">
                <ContactsData />
              </PrivateRoute> */}
            <Route path="*" element={<Homepage />} />
          </Route>
        </Routes>
        </Suspense>
    </div>
  );
};
