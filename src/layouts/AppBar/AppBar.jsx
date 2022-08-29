import { Outlet } from "react-router-dom";
import { NavBar } from "layouts/NavBar/NavBar";
import { UserBar } from "layouts/UserBar/UserBar";
import { AppBarHeader } from "./AppBar.styled";

export const AppBar = () => {

  return (
    <div>
      <AppBarHeader>
          <NavBar />
          <UserBar />
      </AppBarHeader>
      <Outlet />
    </div>
  )
};