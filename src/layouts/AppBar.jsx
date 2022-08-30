import { Header } from "./common/Header.styled";
import { NavBar } from "layouts/common/NavBar/NavBar";
import { UserBar } from "layouts/common/UserBar/UserBar";
import { Outlet } from "react-router-dom";
import { BodyContainer } from "components/common/BodyContainer.styled";
import { PageContainer } from "components/common/PageContainer.styled";

const AppBar = () => {
  return (
    <BodyContainer>
      <Header>
        <NavBar />
        <UserBar />
      </Header>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </BodyContainer>
  )
};

export default AppBar;