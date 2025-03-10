import React from "react";
import scss from "./Recomend_section.module.scss";
import Product_card from "@/components/ui/cards/product_card/Product_card";
interface Recomend_sectionProps {
  data: Tyres[];
}
const Recomend_section = ({ data }: Recomend_sectionProps) => {
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
          <h1>Рекомендуемые</h1>

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

export default Recomend_section;
