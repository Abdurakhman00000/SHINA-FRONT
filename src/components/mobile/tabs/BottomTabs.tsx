"use client";
import React from "react";
import scss from "./BottomTabs.module.scss";
import { IconType } from "react-icons";
import { GoHome, GoHomeFill } from "react-icons/go";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { LuGitCompare } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { useCatalogModalStore } from "@/store/useCatalogModalStore";

interface TabBarButtonProps {
  title?: string;
  className?: string;
  IconOutline: IconType;
  IconSolid: IconType;
  iconSize?: number;
  icon?: string;
  focused?: boolean;
  textClassName?: string;
  iconStyle?: string;
  onClick?: () => void;
}
const TabBarButton = ({
  title,
  className,
  IconOutline,
  IconSolid,
  iconSize,
  focused,
  textClassName,
  iconStyle,
  onClick,
}: TabBarButtonProps) => (
  <button className={className} onClick={onClick}>
    {focused ? (
      <IconSolid size={iconSize} className={iconStyle} />
    ) : (
      <IconOutline size={iconSize} className={iconStyle} />
    )}
    <p className={textClassName}>{title}</p>
  </button>
);

const BottomTabs = () => {
  const { isOpen, setIsOpen } = useCatalogModalStore();
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={scss.BottomTabs}>
      <div className={scss.content}>
        <TabBarButton
          IconOutline={GoHome}
          IconSolid={GoHomeFill}
          iconSize={30}
          className={scss.tab_bar_buttom}
          textClassName={scss.tab_bar_text}
          iconStyle={scss.tab_bar_icon}
        />
        <TabBarButton
          IconOutline={CgMenuGridO}
          IconSolid={IoClose}
          iconSize={30}
          focused={isOpen}
          className={scss.tab_bar_buttom}
          textClassName={scss.tab_bar_text}
          onClick={toggleModal}
          iconStyle={scss.tab_bar_icon}
        />

        <TabBarButton
          IconOutline={IoMdHeartEmpty}
          IconSolid={IoMdHeart}
          iconSize={30}
          className={scss.tab_bar_buttom}
          textClassName={scss.tab_bar_text}
          iconStyle={scss.tab_bar_icon}
        />
        <TabBarButton
          IconOutline={LuGitCompare}
          IconSolid={LuGitCompare}
          iconSize={30}
          className={scss.tab_bar_buttom}
          textClassName={scss.tab_bar_text}
          iconStyle={scss.tab_bar_icon}
        />
      </div>
    </div>
  );
};

export default BottomTabs;
