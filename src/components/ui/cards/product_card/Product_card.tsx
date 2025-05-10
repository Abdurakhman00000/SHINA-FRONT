import React, { useEffect, useMemo } from "react";
import scss from "./Product_card.module.scss";
import { RiScales3Line } from "react-icons/ri";
import Link from "next/link";
import { IoMdHeart } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import { useLoacalStorageData } from "@/store/useLocalStorageData";

interface Product_cardProps {
  tyre: Tyres;
  handleremoveFavorites?: (id: number) => void;
  isFavoriPage?: boolean;
}

const Product_card = ({ tyre, handleremoveFavorites, isFavoriPage }: Product_cardProps) => {
  const { comparesData, setCompareTyres } = useLoacalStorageData();

  useEffect(() => {
    const compareTyres = JSON.parse(localStorage.getItem("compares") || "[]");
    setCompareTyres(compareTyres);
  }, []);

  const parsedImages = useMemo<string[]>(() => {
    if (!tyre) return [];
    try {
      return Array.isArray(tyre.images) ? tyre.images : JSON.parse(tyre.images);
    } catch (error) {
      console.error("Ошибка парсинга tyre.images:", error);
      return [];
    }
  }, [tyre]);

  const handleAddCompare = () => {
    if (!tyre) return;

    const compareTyres = localStorage.getItem("compares");
    let compares: Tyres[] = [];

    try {
      const parsed = compareTyres ? JSON.parse(compareTyres) : [];
      compares = Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error("Ошибка парсинга compares:", e);
      compares = [];
    }

    if (compares.some((com) => com.id === tyre.id)) {
      compares = compares.filter((com) => com.id !== tyre.id);
    } else {
      compares.push(tyre);
    }

    localStorage.setItem("compares", JSON.stringify(compares));
    setCompareTyres(compares);
  };

  if (!tyre) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div className={scss.card}>
        <div className={scss.image_wrapper}>
          {parsedImages.length > 0 && <img src={parsedImages[0]} alt="img" />}
          {isFavoriPage && (
            <IoMdHeart
              size={20}
              className={scss.remove_favorite}
              onClick={() => {
                if (handleremoveFavorites) {
                  handleremoveFavorites(tyre.id);
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
            <h3>{tyre.brand}</h3>
            <h2>{tyre.product_name}</h2>
            <span>
              {tyre.width}/{tyre.height} R{parseInt(tyre.diameter)} {tyre.load_index}V
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

            <button className={scss.icon} onClick={handleAddCompare}>
              {Array.isArray(comparesData) && comparesData.some((com) => com.id === tyre.id) ? (
                <GiCheckMark />
              ) : (
                <RiScales3Line />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_card;
