import { AppBarHeader } from "./AppBar.styled";
import { NavBar } from "layouts/NavBar/NavBar";
import { UserBar } from "layouts/UserBar/UserBar";
import { Outlet } from "react-router-dom";

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