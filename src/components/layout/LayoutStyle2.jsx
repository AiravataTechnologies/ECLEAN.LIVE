import React from "react";
import { Outlet } from "react-router-dom";
import ScrollTop from "../ScrollTop";
import Footer from "../sections/footer/Footer";
import Header2 from "../sections/header/HeaderStyle2";

const LayoutStyle2 = () => {
  return (
    <>
      <Header2 />
      <Outlet />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default LayoutStyle2;
