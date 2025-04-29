"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import scss from "./DetailsPage.module.scss";
import { IoMdHeart, IoMdHeartEmpty, IoMdStar } from "react-icons/io";
import { LuGitCompareArrows } from "react-icons/lu";
import { RiShare2Line } from "react-icons/ri";
import { FaTruck, FaCreditCard, FaStore, FaShoppingCart, FaFire, FaStar, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { useGetDataByIdQuery } from "@/redux/api/data";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BiLoaderAlt } from "react-icons/bi";
import { useLoacalStorageData } from "@/store/useLocalStorageData";
import SimilarProducts from "@/components/similar_products/SimilarProducts";

interface OptionType {
  value: string;
  label: string;
}

const options = [
  { value: "product", label: "О товаре" },
  { value: "price", label: "Цены" },
  { value: "characteristics", label: "Характеристики" },
  { value: "reviews", label: "Отзывы" },
];

const DetailsPage = () => {
  const { id } = useParams();
  const { data: tyre, isLoading } = useGetDataByIdQuery(Number(id));
  const [selected, setSelected] = useState<string | OptionType>("product");
  const { favoritesData, setFavoriteTyres } = useLoacalStorageData();
  const [active, setActive] = useState<number>(0);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load favorites from localStorage
  useEffect(() => {
    const favoritesTyres = localStorage.getItem("favorites");
    let favorites: Tyres[] = favoritesTyres ? JSON.parse(favoritesTyres) : [];
    setFavoriteTyres(favorites);
  }, [setFavoriteTyres]);

  // Memoize images to prevent unnecessary re-renders
  const images = useMemo(() => {
    if (!tyre?.images) return [];

    if (typeof tyre.images === "string") {
      try {
        return JSON.parse(tyre.images);
      } catch (e) {
        console.error("Ошибка парсинга изображений", e);
        return [];
      }
    }

    return tyre.images;
  }, [tyre?.images]);

  // Use useCallback to prevent unnecessary re-renders
  const handleAddFavorite = useCallback(() => {
    if (tyre) {
      const favoritesTyres = localStorage.getItem("favorites");
      let favorites: Tyres[] = favoritesTyres ? JSON.parse(favoritesTyres) : [];
      
      if (favorites.some((fav) => fav.id === tyre.id)) {
        favorites = favorites.filter((fav) => fav.id !== tyre.id);
      } else {
        favorites.push(tyre);
      }
      
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setFavoriteTyres(favorites);
    }
  }, [tyre, setFavoriteTyres]);

  // Memoize the check for favorite status
  const isFavorite = useMemo(() => 
    favoritesData.some((fav) => fav.id === tyre?.id),
    [favoritesData, tyre?.id]
  );

  // Handle image selection
  const handleImageSelect = useCallback((index: number) => {
    setActive(index);
  }, []);

  // Handle tab selection
  const handleTabSelect = useCallback((value: string) => {
    setSelected(value);
  }, []);

  if (isLoading) {
    return (
      <div className={scss.loader}>
        <BiLoaderAlt size={40} className={scss.loader_icon} />
      </div>
    );
  }

  // Format price helper
  const formatPrice = (price?: string | number) => {
    return Math.trunc(Number(price)) + " ₽";
  };

  return (
    <section className={scss.Main}>
      <div className="container">
        <div className={scss.content}>
          {/* Header section */}
          <div className={scss.header}>
            <div className={scss.title}>
            <div className={scss.brand_and_name}>
              <h1>{tyre?.brand}</h1>
              <h2>{tyre?.product_name}</h2>
            </div>
              <p>{formatPrice(tyre?.price)}</p>
            </div>
            <div className={scss.action}>
              <button className={scss.button} onClick={handleAddFavorite}>
                {isFavorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
                В избранное
              </button>
              <button className={scss.button}>
                <LuGitCompareArrows />К сравнению
              </button>
              <button className={scss.button}>
                <RiShare2Line />
                Поделиться
              </button>
            </div>
          </div>

          {/* Product section */}
          <div className={scss.product}>
            <div className={scss.image_box}>
              <div className={scss.img_slider}>
                {Array.isArray(images) && images.map((el, index) => (
                  <img
                    key={index}
                    className={`${active === index ? scss.active : ""}`}
                    src={el}
                    alt="шина"
                    onClick={() => handleImageSelect(index)}
                  />
                ))}
              </div>
              <div className={scss.img_wrapper}>
                <img src={images[active]} alt="tyre" />
              </div>
            </div>
            <div className={scss.info_box}>
              <div className={scss.about}>
                <h3>О товаре</h3>
                <table>
                  <tbody>
                    <tr>
                      <td className={scss.title}>Сезон:</td>
                      <td className={scss.value}>{tyre?.season} </td>
                    </tr>
                    <tr>
                      <td className={scss.title}>Шипы:</td>
                      <td className={scss.value}>Нет</td>
                    </tr>
                    <tr>
                      <td className={scss.title}>Размеры:</td>
                      <td>
                        {tyre?.width}/{tyre?.height} R
                        {parseInt(tyre?.diameter as string)}
                        {tyre?.load_index}V
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={scss.card}>
                <h2 className={scss.card_price}>{formatPrice(tyre?.price)}</h2>
                <ul className={scss.features}>
                  <li className={scss.store}>
                    <FaShoppingCart /> Колёса Даром
                    <span className={scss.rating}>
                      <IoMdStar className={scss.star} /> 4.2 · 132 оценки
                    </span>
                  </li>
                </ul>
                <a href="#" className={scss.description}>
                  Описание от магазина →
                </a>
                <Link href={tyre?.url!} className={scss.button}>
                  В магазин
                </Link>
              </div>
            </div>
          </div>

          {/* Category tabs */}
          <div className={scss.category}>
            <div className={scss.options}>
              {options.map((item, index) => (
                <button
                  onClick={() => handleTabSelect(item.value)}
                  key={index}
                  className={`${selected === item.value ? scss.active : ""} ${
                    ["reviews", "price"].includes(item.value) ? scss.element : ""
                  }`}
                >
                  {["price"].includes(item.value) && (
                    <div className={scss.count_price}>14</div>
                  )}
                  {["reviews"].includes(item.value) && (
                    <div className={scss.count_reviews}>12</div>
                  )}
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Prices section */}
          <div className={scss.sort}>
            <h2>Цены на Arivo Transito ARZ 6-C в г. Москва</h2>
          </div>
          <div className={scss.price_card}>
            <img className={scss.product_img} src={images[0]} alt="img" />
            <div className={scss.column1}>
              <h4 className={scss.title}>Шины Arivo</h4>
              <p>
                Диаметр: <span>{tyre?.diameter}</span>
              </p>
              <p>
                Высота профиля: <span>{tyre?.height}</span>
              </p>
              <a href="#">Описание от магазина →</a>
            </div>
            <div className={scss.column2}>
              <ul className={scss.features}>
                <li>
                  <FaTruck /> Доставка есть
                </li>
                <li>
                  <FaCreditCard /> Оплата картой и наличными
                </li>
                <li>
                  <FaStore /> Самовывоз есть
                </li>
              </ul>
            </div>
            <div className={scss.column3}>
              <img className={scss.logo} src="/logo-a.png" alt="logo" />
              <span className={scss.rating}>
                <IoMdStar className={scss.star} /> 4.2 · 132 оценки
              </span>
              <span className={scss.discount}>
                <FaFire className={scss.fire} />
                Скидки в магазине
              </span>
            </div>
            <div className={scss.column4}>
              <span className={scss.price_item}>{formatPrice(tyre?.price)}</span>
              <Link href={tyre?.url!}>
                В магазин <GoLinkExternal />
              </Link>
            </div>
          </div>

          {/* Characteristics section */}
          <div className={scss.specs_card}>
            <h2 className={scss.title}>{tyre?.product_name}</h2>
            <div className={scss.specs}>
              <div className={scss.column}>
                <h3 className={scss.subtitle}>Общие характеристики</h3>
                <div className={scss.row}>
                  <span className={scss.label}>Бренд</span>
                  <a href="#" className={scss.link}>
                    {tyre?.brand}
                  </a>
                </div>
                <div className={scss.row}>
                  <span className={scss.label}>Категория</span>
                  <a href="#" className={scss.link}>
                    Автомобильные шины
                  </a>
                </div>
                <div className={scss.row}>
                  <span className={scss.label}>Сезонность</span>
                  <span className={scss.value}>{tyre?.season}</span>
                </div>
              </div>

              <div className={scss.column}>
                <div className={scss.row}>
                  <span className={scss.label}>Ширина</span>
                  <span className={scss.value}>{tyre?.width}</span>
                </div>
                <div className={scss.row}>
                  <span className={scss.label}>Высота</span>
                  <span className={scss.value}>{tyre?.height}</span>
                </div>
                <div className={scss.row}>
                  <span className={scss.label}>Индекс скорости</span>
                  <span className={scss.value}>{tyre?.speed_index}</span>
                </div>
                <div className={scss.row}>
                  <span className={scss.label}>Индекс нагрузки</span>
                  <span className={scss.value}>{tyre?.load_index}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews section */}
          <div className={scss.comment}>
            <h2 className={scss.title}>
              Отзывы <sup className={scss.count}>2</sup>
            </h2>

            <div className={scss.review}>
              <div className={scss.user}>
                <div className={scss.avatar}>
                  <span>Я</span>
                </div>
                <div>
                  <p className={scss.username}>Ярослав</p>
                  <p className={scss.date}>16 мая 2022</p>
                </div>
              </div>

              <div className={scss.stars}>
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <FaStar key={i} className={scss.star} />
                  ))}
              </div>

              <p>
                <strong>Достоинства:</strong> Хорошая резина. Не шумная.
              </p>
              <p>
                <strong>Недостатки:</strong> Нет.
              </p>
              <p>
                <strong>Комментарий:</strong> Резина хорошая, хоть бренд
                практически не известный. На трассе весьма предсказуема в
                управлении и поведению в колее. Хорошо себя показала в
                скоростной езде по трассе. Уверенно и зло держит дорогу на
                мокром и сухом покрытии. На скорости конечно присутствует
                небольшой шум, но он на грани слышимости и не мешает.
              </p>

              <div className={scss.actions}>
                <button className={scss.like}>
                  <FaThumbsUp /> 0
                </button>
                <button className={scss.dislike}>
                  <FaThumbsDown /> 0
                </button>
              </div>
            </div>
          </div>

          {/* Similar products section */}
          {tyre?.id && <SimilarProducts tyreId={tyre.id} />}
        </div>
      </div>
    </section>
  );
};

// Export as memoized component for better performance
export default React.memo(DetailsPage);
