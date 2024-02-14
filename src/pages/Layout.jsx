import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="text-3xl">Layout</div>
      <Outlet />
    </>
  );
};

export default Layout;
