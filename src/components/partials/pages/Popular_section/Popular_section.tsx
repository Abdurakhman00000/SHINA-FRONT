import React from "react";
import scss from "./Popular_section.module.scss";
import Product_card from "@/components/ui/cards/product_card/Product_card";
interface Popular_sectionProps {
  data: Tyres[];
  isLaoding?: boolean;
}

const Popular_section = ({ data, isLaoding }: Popular_sectionProps) => {
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
          <h1>Популярные</h1>
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

export default Popular_section;
