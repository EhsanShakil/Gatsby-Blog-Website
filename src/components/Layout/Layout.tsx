import React, { ReactNode } from "react";
import Header from "../Header/Header";

type Prop = {
  children: ReactNode;
};

const Layout = ({ children }: Prop) => {
  return (
    <div className="AllOver">
      <Header /> {children}
    </div>
  );
};

export default Layout;
