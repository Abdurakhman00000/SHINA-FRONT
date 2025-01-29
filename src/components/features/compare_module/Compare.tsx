import React from "react";
import scss from "./Compare.module.scss";
import { IoMdAdd } from "react-icons/io";
import Compare_card from "@/components/ui/cards/compare_card/Compare_card";
const Compare = () => {
  return (
    <section className={scss.Main}>
      <div className={scss.content}>
        <div className={scss.card_block}>
          <div className={scss.add_item}>
            <IoMdAdd /> <button>Добавить товар</button>
          </div>
          <div className={scss.items}>
            <Compare_card />
            <Compare_card />
            <Compare_card />
            <Compare_card />
          </div>
        </div>
        <table className={scss.table}>
          <tbody>
            <tr>
              <th colSpan={8} className={`${scss.header} ${scss.border}`}>
                Основные характеристики
              </th>
            </tr>
            <tr>
              <td className={scss.title}>Сезон:</td>
              <td>Летние Lorem</td>
            </tr>
            <tr>
              <td className={scss.title}>Шипы:</td>
              <td>Нет</td>
            </tr>
            <tr>
              <td className={scss.title}>Тип автомобиля:</td>
              <td>Значение</td>
            </tr>

            <tr>
              <th colSpan={2} className={scss.header}>
                Размеры
              </th>
            </tr>
            <tr>
              <td className={scss.title}>Ширина:</td>
              <td>Значение</td>
            </tr>
            <tr>
              <td className={scss.title}>Профиль:</td>
              <td>Значение</td>
            </tr>
            <tr>
              <td className={scss.title}>Диаметр:</td>
              <td>Значение</td>
            </tr>
            <tr>
              <td className={scss.title}>Индекс загрузки:</td>
              <td>Значение</td>
            </tr>

            <tr>
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
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Compare;
