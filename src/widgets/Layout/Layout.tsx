import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {{ children }}
      <Sidebar />
    </>
  );
};

export default Layout;
