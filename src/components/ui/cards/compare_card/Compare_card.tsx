import React, { FC } from "react";
import scss from "./Compare_card.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

const Compare_card: FC = () => {
  return (
    <div className={scss.Compare_card}>
      <div className={scss.item}>
        <img
          src="https://static.price.ru/images/models/401x401/avtomobilnaya-shina/tri-ace-snow-white-ii/cd92e1e3ce27d90211d07b9dddd57c95.JPEG"
          alt="шина"
          loading="lazy"
        />
        <div className={scss.info}>
          <h3>Aвтомобильная шина MH12</h3>
          <p>от 6078 Р</p>
        </div>
      </div>

      <div className={scss.icons}>
        <span className={scss.heart} aria-label="Добавить в избранное">
          <FaRegHeart />
        </span>
        <span className={scss.delete} aria-label="Удалить">
          <FiTrash />
        </span>
      </div>
    </div>
  );
};

export default Compare_card;
