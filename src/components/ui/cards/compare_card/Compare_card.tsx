import React from "react";
import scss from "./Compare_card.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";
interface Compare_cardProps {
  image: string;
  name: string;
  price: number;
  id: number;
  isFavorite: boolean;
  handledelete: (id: number) => void;
  handleAddFavorite: () => void;
}
const Compare_card: React.FC<Compare_cardProps> = ({
  image,
  name,
  price,
  id,
  isFavorite,
  handledelete,
  handleAddFavorite,
}) => {
  return (
    <div className={scss.Compare_card}>
      <div className={scss.item}>
        <img src={image} alt={name} loading="lazy" />
        <div className={scss.info}>
          <h3>{name}</h3>
          <p>{price} ₽</p>
        </div>
      </div>

      <div className={scss.icons}>
        <span
          className={scss.heart}
          aria-label="Добавить в избранное"
          onClick={handleAddFavorite}
        >
          {isFavorite ? <IoMdHeart size={20} /> : <FaRegHeart size={20} />}
        </span>
        <span className={scss.delete} aria-label="Удалить">
          <FiTrash onClick={() => handledelete(id)} />
        </span>
      </div>
    </div>
  );
};

export default Compare_card;
