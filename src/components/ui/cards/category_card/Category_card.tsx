import React from 'react';
import scss from './Category_card.module.scss';
import Image from 'next/image';
import car_wheel from '../../../../../public/assets/category_images/car_wheels_img.webp';
import car_rims from '../../../../../public/assets/category_images/car_rims_Img.webp';
import moto_wheel from '../../../../../public/assets/category_images/moto_wheels_img.webp';
import commerc_wheel from '../../../../../public/assets/category_images/commerc_whells_img.webp';

const categoryData = [
  { id: 1, title: 'Шины', image: car_wheel },
  { id: 2, title: 'Диски', image: car_rims },
  { id: 3, title: 'Мотоциклетные шины', image: moto_wheel },
  { id: 4, title: 'Коммерческие шины', image: commerc_wheel },
];

const CategoryCard = () => {
  return (
    <div className={scss.cardContainer}>
      {categoryData.map((category) => (
        <div key={category.id} className={scss.card}>
          <h4>{category.title}</h4>
          <Image
            src={category.image}
            alt={category.title}
            height={150} // Уменьшил для лучшей пропорции
            width={250} // Установил ширину ближе к карточке
            className={scss.cardImage}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;