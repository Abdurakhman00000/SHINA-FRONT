import React, { FC, ReactNode } from "react";
import Footer from "./footer/Footer";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import ScrollToTop from "../ui/scrollToTop/ScrollToTop";

interface iLayoutSiteProps {
  children: ReactNode;
}
const LayoutSite: FC<iLayoutSiteProps> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      <Header />
      <main>{children}</main>
      <ScrollToTop/>
      <Footer />
    </div>
  );
};

export default LayoutSite;
