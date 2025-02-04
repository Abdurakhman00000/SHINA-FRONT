"use client";

import { useState } from "react";
import scss from "./FilterSiteBar.module.scss";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const filters = [
  { label: "Цены, ₽", content: (
    <>
        <div className={scss.price_diap}>
        <input
          type="text"
          placeholder="От 1500"
        />
        <input
          type="text"
          placeholder="До 170000"
        />
        </div>
    </>
  ) },

  {
    label: "Производитель",
    content: (
      <>
        <input
          type="text"
          placeholder="Поиск производителя..."
          className={scss.searchInput}
        />
        <div className={scss.checkboxList}>
          {["Yokohama", "Continental", "Pirelli", "Continental", "Nokian", "Kumho", "Cordiant", "Hankook", "Michelin", "Dunlop", "Aurora", "Toyo"].map(
            (brand) => (
              <label key={brand} className={scss.checkboxLabel}>
                <input type="checkbox" value={brand} />
                <p>{brand}</p>
              </label>
            )
          )}
        </div>
      </>
    ),
  },

  { label: "Сезонность", content: (
    <div className={scss.checkboxList}>
          {["Зимние", "Летние", "Всесезонные"].map(
            (brand) => (
              <label key={brand} className={scss.checkboxLabel}>
                <input type="checkbox" value={brand} />
                <p>{brand}</p>
              </label>
            )
          )}
        </div>
  ) },


  { label: "Ширина профиля", content: (
    <>
                <input className={scss.searchInput} type="text" placeholder="Введите ширину"/>
    </>
  ) },

  { label: "Высота профиля", content: ( 
    <>
                <input className={scss.searchInput} type="text" placeholder="Введите профиль"/>
    </>
  ) },

  { label: "Диаметр", content: (
    <>
                <input className={scss.searchInput} type="text" placeholder="Введите диаметр"/>
    </>
  ) },

  { label: "Шипы", content: (
    <div className={scss.checkboxList}>
          {["Шипы"].map(
            (brand) => (
              <label key={brand} className={scss.checkboxLabel}>
                <input type="checkbox" value={brand} />
                <p>{brand}</p>
              </label>
            )
          )}
        </div>
  ) },

  { label: "Индекс скорости", content: (
    <div className={scss.checkboxList}>
          {["L (120 km/h)", "M (130 km/h)", "N (140 km/h)", "P (150 km/h)","Q (160 km/h)", "R (170 km/h)", "S (180 km/h)", "T (190 km/h)", "U (200 km/h)", "H (210 km/h)", "V (240 km/h)", "W (270 km/h)", "Y (300 km/h)", "Z (300+ km/h)",].map(
            (brand) => (
              <label key={brand} className={scss.checkboxLabel}>
                <input type="checkbox" value={brand} />
                <p>{brand}</p>
              </label>
            )
          )}
        </div>
  ) },

  { label: "Индекс наргузки", content: (
    <>
        <div className={scss.price_diap}>
        <input
          type="text"
          placeholder="От 65"
        />
        <input
          type="text"
          placeholder="До 140"
        />
        </div>
    </>
  ) },
];


export default function FilterSideBar() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (value: string) => {
    setOpenSections((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="container">
      <div className={scss.sidebar}>
      {filters.map(({ label, content }) => (
        <div key={label} className={scss.filterItem}>
          <button
            onClick={() => toggleSection(label)}
            className={scss.trigger}
          >
            {label}
            <span>{openSections.includes(label) ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
          </button>
          {openSections.includes(label) && (
            <div className={scss.content}>{content}</div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
}