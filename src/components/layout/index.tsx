import { Outlet } from "react-router-dom";
import { Container, MainContent, SidebarWrapper } from "./styles";
import HeaderComponent from "@components/HeaderComponent/HeaderComponent";
import Sidebar from "@components/SideBarComponent";

const Layout = () => {
  return (
    <Container>
      <SidebarWrapper>
        <Sidebar />
        <MainContent>
          <HeaderComponent />
          <Outlet />
        </MainContent>
      </SidebarWrapper>
    </Container>
  );
};

export default Layout;
