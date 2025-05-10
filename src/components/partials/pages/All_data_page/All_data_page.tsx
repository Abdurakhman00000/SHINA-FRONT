"use client";
import React from "react";
import scss from "./All_data_page.module.scss";
import Product_card from "@/components/ui/cards/product_card/Product_card";
import NoData from "@/components/ui/no_data/NoData";
import { FcNext, FcPrevious } from "react-icons/fc";
interface AlldataPagePropf {
  data: Product;
  next: () => void;
  prev: () => void;
  page: number;
}
const All_data_page: React.FC<AlldataPagePropf> = ({
  data,
  next,
  prev,
  page,
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
            <button onClick={prev} disabled={page === 1}>
              <FcPrevious size={20} />
            </button>
            <button onClick={next}>
              <FcNext size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default All_data_page;
