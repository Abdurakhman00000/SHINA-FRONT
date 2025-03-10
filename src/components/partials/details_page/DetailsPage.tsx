"use client";
import React, { useState } from "react";
import scss from "./DetailsPage.module.scss";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuGitCompareArrows } from "react-icons/lu";
import { RiShare2Line } from "react-icons/ri";
import { FaTruck, FaCreditCard, FaStore, FaShoppingCart } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { FaStar, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import SelectComponent from "@/components/ui/selectComponent/SelectComponent";
import PriceHistory from "@/components/ui/PriceHistory/PriceHistory";
import { useGetDataByIdQuery } from "@/redux/api/data";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BiLoaderAlt } from "react-icons/bi";

interface OptionType {
  value: string;
  label: string;
}
const img = [
  "https://static.price.ru/images/models/401x401/avtomobilnaya-shina/marshal-mh12/52e31fcff684980e1127dc63f22bf413.JPEG",
  "https://www.kivano.kg/images/product/136706/full/1716285700_96966300.jpg",
  "https://vsekolesa.ru/uploads/product/368/5-T608x0.jpg",
  "https://storage.yandexcloud.net/nik-auto/vezemkolesa/www/assets/catalog/tyre/Michelin/pilot_sport_4_s/pilot_sport_4_s/pilot_sport_4_s_watermark_1.jpg",
  "https://shinaufa.ru/images/large/tyres/michelin/pilot-sport-ps2.jpg",
];
const options = [
  { value: "product", label: "О товаре" },
  { value: "price", label: "Цены" },
  { value: "characteristics", label: "Характеристики" },
  { value: "reviews", label: "Отзывы" },
  { value: "questions", label: "Вопросы" },
  { value: "price_history", label: "История цен" },
  { value: "accessories", label: "Аксессуары" },
];

const DetailsPage = () => {
  const { id } = useParams();
  const { data: tyre, isLoading } = useGetDataByIdQuery(Number(id));

  const [selected, setSelected] = useState<string | OptionType>("product");

  const [active, setActive] = useState<number>(0);
  if (isLoading) {
    return (
      <div className={scss.loader}>
        <BiLoaderAlt size={40} className={scss.loader_icon} />
      </div>
    );
  }
  return (
    <section className={scss.Main}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.header}>
            <div className={scss.title}>
              <h2>{tyre?.product_name}</h2>
              <p>{tyre?.price}</p>
            </div>
            <div className={scss.action}>
              <span className={scss.rating}>4.5</span>
              <button className={scss.button}>Оставить отзыв</button>
              <button className={scss.button}>
                <IoMdHeartEmpty />В избранное
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
          <div className={scss.product}>
            <div className={scss.img_slider}>
              {tyre?.images.map((el, index) => (
                <img
                  key={index}
                  className={`${active === index ? scss.active : ""}`}
                  src={el}
                  alt="шина"
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
            <div className={scss.img_wrapper}>
              <img src={img[active]} alt="шина" />
            </div>
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
                    <td className={scss.title}>Тип автомобиля:</td>
                    <td>225/75 R16, 185/75 R16</td>
                  </tr>
                </tbody>
              </table>
              <p>Все характеристики</p>
            </div>
            <div className={scss.card}>
              <h2 className={scss.card_price}>{tyre?.price}</h2>
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
          <div className={scss.category}>
            <div className={scss.options}>
              {options.map((item, index) => (
                <button
                  onClick={() => setSelected(item.value)}
                  key={index}
                  className={`${selected === item.value ? scss.active : ""} ${
                    ["reviews", "price"].includes(item.value)
                      ? scss.element
                      : ""
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
          {/* Цены */}
          <div className={scss.sort}>
            <h2>Цены на Arivo Transito ARZ 6-C в г. Москва</h2>
            <div className={scss.actions}>
              <div className={scss.select}>
                <SelectComponent options={options} />
              </div>
            </div>
          </div>
          <div className={scss.price_card}>
            <img
              className={scss.product_img}
              src="https://www.kivano.kg/images/product/136706/full/1716285700_96966300.jpg"
              alt="img"
            />
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
              <span className={scss.price_item}>{tyre?.price}</span>
              <Link href={tyre?.url!}>
                В магазин <GoLinkExternal />
              </Link>
            </div>
          </div>
          {/* Цены */}

          {/* Характеристики */}
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
                <h3 className={scss.subtitle}>Дополнительные характеристики</h3>
                <div className={scss.row}>
                  <span className={scss.label}>Шипы</span>
                  <span className={scss.value}>Нет</span>
                </div>
                <div className={scss.row}>
                  <span className={scss.label}>Типоразмеры</span>
                  <span className={scss.value}>
                    185/60 R15, 175/70 R13, 205/55 R16, 185/65 R14, 175/70 R14,
                    205/65 R15, 235/60 R16
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Характеристики */}

          {/*Отзывы*/}
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

            <div className={scss.reviewButton}>
              <button className={scss.button}>Оставить отзыв</button>
              <p className={scss.hint}>
                Поделитесь опытом использования товара, расскажите о его
                достоинствах и недостатках в своем отзыве
              </p>
            </div>
          </div>
          {/*Отзывы*/}
          <PriceHistory />
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
