"use client";


import React from "react";
import scss from "./All_data_page.module.scss";
import Product_card from "@/components/ui/cards/product_card/Product_card";
import NoData from "@/components/ui/no_data/NoData";
interface AlldataPagePropf {
  data: Product;
  handleLoadMore: () => void;
}
const All_data_page: React.FC<AlldataPagePropf> = ({
  data,
  handleLoadMore,
}) => {
  if (!data) {
    return <NoData />;
  } 
  return (
    <div className={scss.All_data}>
      <div className={scss.content}>
        <div className={scss.main_card}>
          {data.results.map((tyre) => (
            <Product_card key={tyre.id} tyre={tyre} />
          ))}

        </div>
        {data.count > data.results.length && (
          <div className={scss.loadMore_button}>
            <button onClick={handleLoadMore}>Показать еще</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default All_data_page;
