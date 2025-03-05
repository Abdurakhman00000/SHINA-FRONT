import React, { useEffect } from "react";
import scss from "./BurgerModal.module.scss";
import { useBurgerModal } from "@/store/useBurgerModal";
import { nav_links } from "@/constants/links";
import { useAutoPodborModalStore } from "@/store/useAutoPodborModal";
interface MenuProps {
  handleAutoPodborModal?: () => void;
}
const Menu = ({ handleAutoPodborModal }: MenuProps) => {
  return (
    <ul>
      {nav_links.map((link) => (
        <li
          key={link.id}
          onClick={link.id === 1 ? handleAutoPodborModal : undefined}
        >
          {link.icon && <link.icon />}
          {link.name}
        </li>
      ))}
    </ul>
  );
};

const BurgerModal = () => {
  const { isOpen, toggleModal } = useBurgerModal();
  const { autoPodborOpen, togggleAutoPodborModal } = useAutoPodborModalStore();
  const handleAutoPodborModal = () => {
    togggleAutoPodborModal(!autoPodborOpen);
    toggleModal(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  return (
    <div className={`${scss.BurgerModal} ${isOpen ? scss.active_burger : ""}`}>
      <div className={scss.content}>
        <div className={scss.mobile_nav_links}>
          <Menu handleAutoPodborModal={handleAutoPodborModal} />
        </div>
      </div>
    </div>
  );
};

export default BurgerModal;
