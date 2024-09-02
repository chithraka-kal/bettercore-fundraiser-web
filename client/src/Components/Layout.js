import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout({}) {
  return (
    <main className="w-full flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;
