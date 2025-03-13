"use client";
import React from "react";
import Hero_section from "./pages/Hero_section/Hero_section";
import Popular_section from "./pages/Popular_section/Popular_section";
import Category_section from "./pages/Сategory_section/Category_section";
import Recomend_section from "./pages/Recomend_section/Recomend_section";
import Watched_products from "./pages/Already_watched_products/Watched_products";
import { useGetDataQuery } from "@/redux/api/data";
import CardSkeleton from "../ui/skeletons/card_skeleton/CardSkeleton";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const MainPage = () => {
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
    return (
      <div>
        <p>Нет данных</p>
      </div>
    );
  }
  return (
    <>
      <Hero_section />
      <Popular_section data={data} />
      <Category_section />
      <Recomend_section data={data} />
      <Watched_products data={data} />
    </>
  );
};

export default MainPage;
