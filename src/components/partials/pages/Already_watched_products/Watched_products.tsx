import React from "react";
import scss from "./Watched_products.module.scss";
import Product_card from "@/components/ui/cards/product_card/Product_card";
interface Watched_productsProps {
  data: Tyres[];
}

const Watched_products = ({ data }: Watched_productsProps) => {
  if (!data) {
    return (
      <div>
        <h2>Нет данных</h2>
      </div>
    );
  }
  return (
    <section className={scss.Main}>
      <div className="container">
        <div className={scss.content}>
          <h1>Просмотренные товары</h1>

          <div className={scss.main_card}>
            {data.map((tyre) => (
              <Product_card key={tyre.id} tyre={tyre} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Watched_products;
