import { Outlet } from "react-router-dom";
import ScrollTop from "../ScrollTop";
import Footer from "../sections/footer/Footer";
import Header from "../sections/header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default Layout;
