"use client";

import React, { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import Image from "next/image";
import shina_logo from "../../../../public/assets/logo/shina-logo-v2.avif";
import Category_button from "@/components/ui/buttons/category_button/Category_button";
import Input from "@/components/ui/input/Input";
import { LuGitCompare, LuSearch } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { MdOutlinePlace, MdOutlineDiscount } from "react-icons/md";
import { FaFire } from "react-icons/fa6";
import AutoPodbor_modal from "@/components/ui/modals/autobodbor_modal/AutoPodbor_modal";
import CatalogModal from "@/components/ui/modals/catalog_modal/Catalog_modal";
import BurgerMenu from "@/components/mobile/ui-elements/burgerMenu/BurgerMenu";
import { useCatalogModalStore } from "@/store/useCatalogModalStore";
import { useAutoPodborModalStore } from "@/store/useAutoPodborModal";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { isOpen, setIsOpen } = useCatalogModalStore();
  const { autoPodborOpen, togggleAutoPodborModal } = useAutoPodborModalStore();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleModalOpen = () => {
    togggleAutoPodborModal(!autoPodborOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsOpen]);

  useEffect(() => {}, []);
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            {isMobile && (
              <div>
                <BurgerMenu />
              </div>
            )}
            <Image src={shina_logo} alt="Logo" width={350} height={700} />
          </div>

          {!isMobile && (
            <div className={scss.category_button}>
              <Category_button isOpen={isOpen} onClick={toggleModal} />
            </div>
          )}

          <div className={scss.search}>
            {isMobile && (
              <div className={scss.find_place_moile}>
                <button>
                  <MdOutlinePlace /> Москва
                </button>
              </div>
            )}
            {isMobile ? (
              <button className={scss.search_button_mobile}>
                <LuSearch />
              </button>
            ) : (
              <Input />
            )}
          </div>

          {!isMobile && (
            <div className={scss.features}>
              <div className={scss.favorite_icon}>
                <GrFavorite /> <p>Избранные</p>
              </div>
              <div className={scss.compare_icon}>
                <LuGitCompare /> <p>Сравнение</p>
              </div>
            </div>
          )}
        </div>

        <div className={scss.bottom_header}>
          {!isMobile && (
            <div className={scss.find_place}>
              <button>
                <MdOutlinePlace /> Москва
              </button>
            </div>
          )}

          {!isMobile && (
            <div className={scss.nav_links}>
              <ul>
                <li onClick={handleModalOpen}>
                  <FaFire /> Подбор по авто
                </li>
                <li>
                  <MdOutlineDiscount /> Скидки дня
                </li>
                <li>Блог</li>
                <li>Бренды</li>
                <div className={scss.line}></div>
                <li>Шины</li>
                <li>Диски</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <AutoPodbor_modal
        isOpen={autoPodborOpen}
        onClose={handleModalOpen}
      />
      <CatalogModal isOpen={isOpen} />
    </header>
  );
};

export default Header;
