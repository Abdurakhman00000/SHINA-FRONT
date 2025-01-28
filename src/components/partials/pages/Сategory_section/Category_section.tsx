import React from "react";
import scss from "./Category.module.scss";
import Product_card from "@/components/ui/cards/product_card/Product_card";

const Category_section = () => {
  return (
    <section className={scss.Main}>
      <div className="container">
        <div className={scss.content}>
          <h1>Category_section</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Product_card />
            <Product_card />
            <Product_card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category_section;
