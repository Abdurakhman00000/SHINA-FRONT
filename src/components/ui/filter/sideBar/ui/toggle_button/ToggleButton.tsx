import React from "react";
import scss from "./ToggleButton.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
interface ToggleButtonProps {
  title: string;
  isOpen: boolean;
  toggle: () => void;
}
const ToggleButton: React.FC<ToggleButtonProps> = ({
  isOpen,
  title,
  toggle,
}) => {
  return (
    <button className={scss.ToggleButton} onClick={toggle}>
      {title}
      {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </button>
  );
};

export default ToggleButton;
