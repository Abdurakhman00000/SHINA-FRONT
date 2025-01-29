import React from "react";
import scss from "./Product_card.module.scss";
import { RiScales3Line } from "react-icons/ri";

const Product_card = () => {
  return (
    <div>
      <div className={scss.card}>
        <div className={scss.image_wrapper}>
          <img
            src="https://static.price.ru/images/models/401x401/avtomobilnaya-shina/zeta-alventi/eec85b483fd3190d170489e55d22f67f.JPEG"
            alt="img"
          />
        </div>
        <div className={scss.product_info}>
          <div className={scss.price}>
            <p>15 200 P</p>
            <span>&#x2022; В наличии</span>
          </div>
          <div className={scss.title}>
            <h3>Зимняя шина Pirelli Scorpion Winter</h3>
            <span>315/45 R21 116V</span>
          </div>
          <div className={scss.season}>
            <p>Сезон:</p>
            <span>Зимние</span>
          </div>
          <div className={scss.action}>
            <button className={scss.more}>Подробнее</button>
            <button className={scss.icon}>
              <RiScales3Line />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_card;
