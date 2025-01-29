import React from "react";
import scss from "./Watched_products.module.scss";
import Product_card from '@/components/ui/cards/product_card/Product_card'


const Watched_products = () => {
  return (
    <section className={scss.Main}>
      <div className="container">
      <div className={scss.content}>
        <h1>Просмотренные товары</h1>

        <div className={scss.main_card}>
                <Product_card/>
                <Product_card/>
                <Product_card/>
                <Product_card/>
                </div>
      </div>
      </div>
    </section>
  );
};

export default Watched_products;
