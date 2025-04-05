"use client";
import React, { useEffect, useState } from "react";
import scss from "./Favorite.module.scss";
import Product_card from "@/components/ui/cards/product_card/Product_card";
import { useLoacalStorageData } from "@/store/useLocalStorageData";

const Favorite = () => {
  const { favoritesData, setFavoriteTyres } = useLoacalStorageData();
  useEffect(() => {
    const favoritesTyres = localStorage.getItem("favorites");
    let favorites: Tyres[] = favoritesTyres ? JSON.parse(favoritesTyres) : [];
    setFavoriteTyres(favorites);
  }, []);

  const handleRemoveFavorite = (id: number) => {
    const updatedFavorites = favoritesData.filter((fav) => fav.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavoriteTyres(updatedFavorites);
  };
  const handleClearAllFavorites = () => {
    localStorage.removeItem("favorites");
    setFavoriteTyres([]);
  };
  return (
    <section className={scss.favorite}>
      <div className="container">
        <div className={scss.header}>
          <h1 className={scss.title}>Избранное</h1>
          <div className={scss.info}>
            <span> {favoritesData.length} товаров</span>
            <button className={scss.clearBtn} onClick={handleClearAllFavorites}>
              Очистить список
            </button>
          </div>
        </div>
        <div className={scss.content}>
          <div className={scss.main_card}>
            {favoritesData.map((tyre) => (
              <Product_card
                key={tyre.id}
                tyre={tyre}
                isFavoriPage={true}
                handleremoveFavorites={handleRemoveFavorite}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorite;
