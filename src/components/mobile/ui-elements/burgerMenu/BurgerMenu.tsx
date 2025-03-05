import React from "react";
import scss from "./BurgerMenu.module.scss";
import { useBurgerModal } from "@/store/useBurgerModal";
import BurgerModal from "../burgerModal/BurgerModal";

const BurgerMenu = () => {
  const { isOpen, toggleModal } = useBurgerModal();

  return (
    <>
      <div className={scss.BurgerMenu}>
        <div className={scss.content}>
          <button
            className={`${scss.burger_button} ${isOpen ? scss.active : ''}`}
            onClick={() => toggleModal(!isOpen)}
          >
            <span className={scss.burger_button_line} />
            <span className={scss.burger_button_line} />
            <span className={scss.burger_button_line} />
          </button>
        </div>
      </div>
      <BurgerModal />
    </>
  );
};

export default BurgerMenu;
