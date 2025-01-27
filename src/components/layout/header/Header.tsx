import React from 'react'
import scss from "./Header.module.scss"
import Image from "next/image";
import shina_logo from "../../../../public/assets/logo/shina-logo-v2.avif"
import Category_button from '@/components/ui/buttons/category_button/Category_button';
import Input from '@/components/ui/input/Input';
import { LuGitCompare } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { MdOutlinePlace } from "react-icons/md";
import { MdOutlineDiscount } from "react-icons/md";
import { FaFire } from "react-icons/fa6";






const Header = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Image
              src={shina_logo}
              alt=""
              width={350}
              height={700}
            />
          </div>

          <div className={scss.category_button}>
            <Category_button/>
          </div>

          <div className={scss.search}>
            <Input/>
          </div>

          <div className={scss.features}>
            <div className={scss.favorite_icon}>
              <GrFavorite /> <p>Избранные</p>
            </div>
            <div className={scss.compare_icon}>
              <LuGitCompare /> <p>Сравнение</p>
            </div>
          </div>

        </div>

        <div className={scss.bottom_header}>
          <div className={scss.find_place}>
            <button> <MdOutlinePlace/> Москва</button>
          </div>

          <div className={scss.nav_links}>
            <ul>
              <li> <FaFire/> Промокоды</li>
              <li> <MdOutlineDiscount/> Скидки дня</li>
              <li>Блог</li>
              <li>Бренды</li>
              <div className={scss.line}></div>
              <li>Шины</li>
              <li>Диски</li>
            </ul>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header