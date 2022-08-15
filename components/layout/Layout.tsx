import React from "react";
import type { NextPage } from "next";
import Nav from "./Nav";

interface LayoutProps {
  children?: JSX.Element;
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Layout;
