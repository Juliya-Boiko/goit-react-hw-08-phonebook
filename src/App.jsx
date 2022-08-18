import { Routes, Route } from "react-router-dom";
import { Homepage } from "pages/Homepage";
import { Registerpage } from "pages/Registerpage";
import { Loginpage } from "pages/Loginpage";
import { SharedLayout } from "layouts/SharedLayout";
import { useSelector } from "react-redux";

export const App = () => {
  const dataStore = useSelector(state => state.user);
  console.log(dataStore);
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path="login" element={<Loginpage />} />
          <Route path="register" element={<Registerpage />} />
          <Route path="*" element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  );
};
