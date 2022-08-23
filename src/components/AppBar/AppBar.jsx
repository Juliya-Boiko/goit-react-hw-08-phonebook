import { Outlet } from "react-router-dom";
import { NavBar } from "components/NavBar/NavBar";
import { UserBar } from "components/UserBar/UserBar";
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