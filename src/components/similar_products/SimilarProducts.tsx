import React from "react";
import scss from "./SimilarProducts.module.scss";
import Product_card from "@/components/ui/cards/product_card/Product_card";
import { useGetDataQuery } from "@/redux/api/data";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import NoData from "../ui/no_data/NoData";

const SimilarProducts = () => {
 const { data, isLoading } = useGetDataQuery();
  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          height: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin indicator={<LoadingOutlined spin />} size="large" />
      </div>
    );
  }
  if (!data) {
    return <NoData />;
  }
  return (
    <section className={scss.Main}>
      <div className="container">
        <div className={scss.content}>
          <h1>Похожие товары</h1>
          <div className={scss.main_card}>
            {data.results.map((tyre) => (
              <Product_card key={tyre.id} tyre={tyre} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarProducts;




