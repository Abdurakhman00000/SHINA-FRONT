import React, { useEffect, useState } from "react";
import scss from "./CompareCardList.module.scss";
import Compare_card from "../cards/compare_card/Compare_card";
interface CompareCardListProps {
  tyres: Tyres[];
  handleDelete: (id: number) => void;
}
const CompareCardList: React.FC<CompareCardListProps> = ({
  tyres,
  handleDelete,
}) => {
  const [favoriteData, setFavoriteData] = useState<Tyres[]>([]);

  useEffect(() => {
    const favoritesTyres = localStorage.getItem("favorites");
    let favorites: Tyres[] = favoritesTyres ? JSON.parse(favoritesTyres) : [];
    setFavoriteData(favorites);
  }, []);
  return (
    <div className={scss.CompareCardList}>
      <div className={scss.content}>
        <ul className={scss.table_list}>
          {tyres?.map((tyre) => {
            const handleAddFavorite = () => {
              if (tyre) {
                const favoritesTyres = localStorage.getItem("favorites");
                let favorites: Tyres[] = favoritesTyres
                  ? JSON.parse(favoritesTyres)
                  : [];
                if (favorites.some((fav) => fav.id === tyre.id)) {
                  favorites = favorites.filter((fav) => fav.id !== tyre.id);
                  localStorage.setItem("favorites", JSON.stringify(favorites));
                  setFavoriteData(favorites);
                } else {
                  favorites.push(tyre);
                  setFavoriteData(favorites);
                }
                localStorage.setItem("favorites", JSON.stringify(favorites));
              }
            };
            const isFavorite = favoriteData.some((f) => f.id === tyre.id);
            return (
              <li className={scss.table_list_item} key={tyre.id}>
                <Compare_card
                  isFavorite={isFavorite}
                  handleAddFavorite={handleAddFavorite}
                  handledelete={handleDelete}
                  id={tyre.id}
                  name={tyre.product_name}
                  price={parseInt(tyre.price)}
                  image={tyre.images[0]}
                />
                <table className={scss.table}>
                  <tbody>
                    <tr>
                      <th
                        colSpan={8}
                        className={`${scss.header} ${scss.border}`}
                      >
                        Основные характеристики
                      </th>
                    </tr>
                    <tr>
                      <td className={scss.title}>Бренд:</td>
                      <td>{tyre.brand}</td>
                    </tr>
                    <tr>
                      <td className={scss.title}>Сезон:</td>
                      <td>{tyre.season}</td>
                    </tr>
                    <tr>
                      <td className={scss.title}>Шипы:</td>
                      <td>Нет</td>
                    </tr>

                    <tr>
                      <th colSpan={2} className={scss.header}>
                        Размеры
                      </th>
                    </tr>
                    <tr>
                      <td className={scss.title}>Ширина:</td>
                      <td>{tyre.width} см</td>
                    </tr>
                    <tr>
                      <td className={scss.title}>Диаметр:</td>
                      <td>{Math.trunc(Number(tyre.diameter))} см</td>
                    </tr>
                    <tr>
                      <td className={scss.title}>Индекс загрузки:</td>
                      <td>{tyre.load_index}</td>
                    </tr>

                    {/* <tr>
                    <th colSpan={2} className={scss.header}>
                      Характеристики
                    </th>
                  </tr>
                  <tr>
                    <td className={scss.title}>Уровень шума:</td>
                    <td>72 дБ</td>
                  </tr>
                  <tr>
                    <td className={scss.title}>Расход топлива:</td>
                    <td>Значение</td>
                  </tr>
                  <tr>
                    <td className={scss.title}>Управляемость:</td>
                    <td>Значение</td>
                  </tr> */}
                  </tbody>
                </table>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CompareCardList;
