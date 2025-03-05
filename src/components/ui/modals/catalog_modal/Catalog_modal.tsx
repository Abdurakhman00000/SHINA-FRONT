
import scss from "./Catalog_modal.module.scss";
import winterTire from "../../../../../public/assets/catalog_images/wheels_img_shina.jpg";
import rimsImg from "../../../../../public/assets/catalog_images/rims1_shina.jpg";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState } from "react";


interface Product {
  id: number;
  type: string;
  image: string | StaticImageData;
}

const tires: Product[] = [
  { id: 1, type: "Зимние", image: winterTire },
  { id: 2, type: "Летние", image: winterTire },
  { id: 3, type: "Всесезонные", image: winterTire },
  { id: 4, type: "Внедорожные", image: winterTire },
  { id: 5, type: "Мотошины", image: winterTire },
  { id: 6, type: "Коммерческие", image: winterTire },
];

const wheels: Product[] = [
  { id: 7, type: "Литые", image: rimsImg },
  { id: 8, type: "Штампованные", image: rimsImg },
  { id: 9, type: "Кованные", image: rimsImg },
  { id: 10, type: "Стальные", image: rimsImg },
  { id: 11, type: "Гоночные", image: rimsImg },
  { id: 12, type: "Кованные", image: rimsImg },
];

interface CatalogModalProps {
  isOpen: boolean;
}

const CatalogModal: React.FC<CatalogModalProps> = ({ isOpen }) => {

  const [selectedCategory, setSelectedCategory] = useState<"tires" | "wheels">(
    "tires"
  );


  const products = selectedCategory === "tires" ? tires : wheels;

 
  return (
    <div className={`${scss.modal} ${isOpen ? scss.open : ""}`}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.select}>
            <p
              className={selectedCategory === "tires" ? scss.active : ""}
              onClick={() => setSelectedCategory("tires")}
            >
              Шины
            </p>
            <p
              className={selectedCategory === "wheels" ? scss.active : ""}
              onClick={() => setSelectedCategory("wheels")}
            >
              Диски
            </p>
          </div>
          <div className={scss.results}>
            {products.map((product) => (
              <div key={product.id} className={scss.product}>
                <p>{product.type}</p>
                <Image
                  width={800}
                  height={350}
                  src={product.image}
                  alt={product.type}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogModal;
