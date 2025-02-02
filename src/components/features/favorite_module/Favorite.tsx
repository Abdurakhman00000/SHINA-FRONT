"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Favorite.module.scss";

const mockProducts = [
  {
    id: 1,
    name: "Внешний аккумулятор TopON TOP-X100 PRO",
    image: "https://altan-shina.ru/local/templates/altanshina/images/tire2.jpg",
    rating: 4.9,
    type: "внешний аккумулятор",
    specs: {
      "Количество USB-портов": 2,
    },
    stores: [
      {
        name: "X-COM",
        rating: 4.6,
        price: 23101,
        delivery: "Есть",
      },
      {
        name: "Регард",
        rating: 4.9,
        price: 26880,
        delivery: "Сегодня - от 290 ₽",
      },
      {
        name: "ОГО!",
        rating: 5.0,
        price: 26490,
        delivery: "Завтра - от 350 ₽",
      },
    ],
  },
  {
    id: 2,
    name: "Смартфон Xiaomi Mi 14 16/1Tb, black",
    image: "https://altan-shina.ru/local/templates/altanshina/images/tire2.jpg",
    rating: 4.5,
    specs: {
      Экран: "OLED/POLED",
      Процессор: "Qualcomm Snapdragon 8 Gen 3, 6-ядерный",
      "Оперативная память": "16 Гб",
      "Встроенная память": "1 Тб",
      "Емкость аккумулятора": "4610 мА*ч",
    },
    stores: [
      {
        name: "Яндекс.Маркет",
        rating: 4.1,
        price: 74820,
        delivery: "Есть",
      },
    ],
  },
];

const categories = [
  "Мобильные телефоны",
  "Внешние аккумуляторы",
  "Адаптеры зарядки для гаджетов",
  "Мыши и клавиатуры",
  "Комплектующие для игрушек",
];

const Favorite = () => {
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  return (
    <section className={styles.favorite}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Избранное</h1>
          <div className={styles.info}>
            <span>5 товаров в 5 категориях</span>
            <button className={styles.clearBtn}>Очистить список</button>
          </div>
        </div>

        <div className={styles.content}>
          <aside className={styles.sidebar}>
            <div className={styles.filter}>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={showOnlyAvailable}
                  onChange={() => setShowOnlyAvailable(!showOnlyAvailable)}
                />
                <span>Показывать только товары в наличии</span>
              </label>
            </div>

            <div className={styles.categories}>
              <h3>Категория товаров</h3>
              <ul>
                {categories.map((category) => (
                  <li key={category}>
                    <label className={styles.checkbox}>
                      <input type="checkbox" />
                      <span>{category}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className={styles.products}>
            <div className={styles.productsList}>
              {mockProducts.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.productImage}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className={styles.image}
                    />
                    <div className={styles.actions}>
                      <button className={styles.favoriteBtn}>
                        <span>❤️</span>
                      </button>
                      <button className={styles.compareBtn}>
                        <span>🔄</span>
                      </button>
                    </div>
                  </div>

                  <div className={styles.productInfo}>
                    <div className={styles.rating}>
                      <span className={styles.ratingValue}>
                        {product.rating}
                      </span>
                    </div>
                    <h3 className={styles.productName}>{product.name}</h3>

                    <div className={styles.specs}>
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className={styles.spec}>
                          <span className={styles.specName}>{key}:</span>
                          <span className={styles.specValue}>{value}</span>
                        </div>
                      ))}
                    </div>

                    <div className={styles.stores}>
                      {product.stores.map((store, index) => (
                        <div key={index} className={styles.store}>
                          <div className={styles.storeHeader}>
                            <div className={styles.storeInfo}>
                              <span className={styles.storeName}>
                                {store.name}
                              </span>
                              <div className={styles.storeRating}>
                                ⭐ {store.rating}
                              </div>
                            </div>
                            <div className={styles.price}>
                              от {store.price.toLocaleString()} ₽
                            </div>
                          </div>
                          <div className={styles.delivery}>
                            📦 {store.delivery}
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className={styles.compareAllBtn}>
                      Сравнить цены {product.stores.length}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorite;
