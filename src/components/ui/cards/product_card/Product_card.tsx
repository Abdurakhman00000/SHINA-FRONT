import React from "react";
import scss from "./Product_card.module.scss";
import { RiScales3Line } from "react-icons/ri";
import Link from "next/link";
import { IoMdHeart } from "react-icons/io";
interface Product_cardProps {
  tyre: Tyres;
  handleremoveFavorites?: (id: number) => void;
  isFavoriPage?: boolean;
}
const Product_card = ({
  tyre,
  handleremoveFavorites,
  isFavoriPage,
}: Product_cardProps) => {
  if (!tyre) {
    return (
      <div>
        <p>Loding...</p>
      </div>
    );
  }
  return (
    <div>
      <div className={scss.card}>
        <div className={scss.image_wrapper}>
          {tyre.images.length > 0 && <img src={tyre.images[0]} alt="img" />}
          {isFavoriPage && (
            <IoMdHeart
              size={20}
              className={scss.remove_favorite}
              onClick={() => {
                if (handleremoveFavorites) {
                  handleremoveFavorites(tyre?.id);
                }
              }}
            />
          )}
        </div>
        <div className={scss.product_info}>
          <div className={scss.price}>
            <p>{Math.trunc(Number(tyre.price))} ₽</p>
            <span>&#x2022; {tyre.availability}</span>
          </div>
          <div className={scss.title}>
            <h3>{tyre.product_name}</h3>
            <span>
              {tyre.width}/{tyre.height} R{parseInt(tyre.diameter)}{" "}
              {tyre.load_index}V
            </span>
          </div>
          <div className={scss.season}>
            <p>Сезон:</p>
            <span>{tyre.season}</span>
          </div>
          <div className={scss.action}>
            <Link href={`/details-page/${tyre.id}`} className={scss.more}>
              Подробнее
            </Link>
            <Link href="/compare">
              <button className={scss.icon}>
                <RiScales3Line />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_card;
// <IoMdHeart />
// <IoMdHeartEmpty />
