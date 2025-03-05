"use client"
import React, { FC, ReactNode } from "react";
import Footer from "./footer/Footer";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import ScrollToTop from "../ui/scrollToTop/ScrollToTop";
import useMediaQuery from "@/hooks/useMediaQuery";
import BottomTabs from "../mobile/tabs/BottomTabs";

interface iLayoutSiteProps {
  children: ReactNode;
}
const LayoutSite: FC<iLayoutSiteProps> = ({ children }) => {
  const isMobile = useMediaQuery("max-width:768px");
  console.log("isMobile", isMobile);
  return (
    <div className={scss.LayoutSite}>
      <Header />
      <main>{children}</main>
      <ScrollToTop />
      <Footer />
      {isMobile && <BottomTabs />}
    </div>
  );
};

export default LayoutSite;
