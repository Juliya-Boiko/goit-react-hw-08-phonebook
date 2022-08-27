import 'modern-normalize';
import { useEffect, lazy, Suspense } from "react";
import { useRedux } from 'hooks/useRedux';
import { getUserData, getRefreshing} from "redux/authSlice";
import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "components/Routes/PublicRoute";
import { PrivateRoute } from "components/Routes/PrivateRoute";
import { AppBar } from "components/AppBar/AppBar";
import { Container } from 'components/common/Container.styled';
import { Loader } from 'components/Loader/Loader';

const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

export const App = () => {
  const [useSelector, dispatch] = useRedux();
  const isRefreshing = useSelector(getRefreshing);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <Container>
      {isRefreshing
        ? <Loader />
        : <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<AppBar />}>
                <Route index path="/"
                  element={<PublicRoute><Home /></PublicRoute>} />
                <Route path="login"
                  element={<PublicRoute restricted><Login /></PublicRoute>} />
                <Route path="register"
                  element={<PublicRoute restricted><Register /></PublicRoute>} />
                <Route path='contacts'
                  element={<PrivateRoute><Contacts /></PrivateRoute>} />
                <Route path="*" element={<Home />} />
              </Route>
            </Routes>
          </Suspense>}
    </Container>
  );
};
