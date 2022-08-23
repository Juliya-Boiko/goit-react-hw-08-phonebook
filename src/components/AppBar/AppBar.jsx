import { Outlet } from "react-router-dom";
import { NavBar } from "components/NavBar/NavBar";
import { UserBar } from "components/UserBar/UserBar";

export const AppBar = () => {

  return (
    <div>
      <header>
        <div>
          <NavBar />
          <UserBar />
        </div>
      </header>
      <Outlet />
    </div>
  )
};