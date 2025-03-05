import React from "react";
import scss from "./Category_button.module.scss";
import { CgMenuGridO } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

interface CategoryButtonProps {
  isOpen: boolean;
  onClick: () => void;
  
}

const Category_Button: React.FC<CategoryButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button className={scss.button} onClick={onClick}>
      {isOpen ? <IoClose /> : <CgMenuGridO />} Каталог
    </button>
  );
};

export default Category_Button;
