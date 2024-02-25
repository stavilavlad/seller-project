import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components/index";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
