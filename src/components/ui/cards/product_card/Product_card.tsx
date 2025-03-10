import React from "react";
import scss from "./Product_card.module.scss";
import { RiScales3Line } from "react-icons/ri";
import Link from "next/link";
interface Product_cardProps {
  tyre: Tyres;
}
const Product_card = ({ tyre }: Product_cardProps) => {
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
        </div>
        <div className={scss.product_info}>
          <div className={scss.price}>
            <p>{tyre.price}</p>
            <span>&#x2022; {tyre.availability}</span>
          </div>
          <div className={scss.title}>
            <h3>{tyre.product_name}</h3>
            <span>315/45 R21 116V</span>
          </div>
          <div className={scss.season}>
            <p>Сезон:</p>
            <span>{tyre.season}</span>
          </div>
          <div className={scss.action}>
            <Link href={`/details-page/${tyre.id}`} className={scss.more}>
              Подробнее
            </Link>
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
