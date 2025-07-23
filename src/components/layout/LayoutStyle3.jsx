import React from "react";
import { Outlet } from "react-router-dom";
import ScrollTop from "../ScrollTop";
import Footer from "../sections/footer/Footer";
import HeaderStyle3 from "../sections/header/HeaderStyle3";

const LayoutStyle3 = () => {
  return (
    <>
      <HeaderStyle3 />
      <Outlet />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default LayoutStyle3;
