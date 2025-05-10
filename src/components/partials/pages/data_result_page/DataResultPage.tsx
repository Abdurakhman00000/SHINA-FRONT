"use client";
import React from "react";
import scss from "./DataResultPage.module.scss";
import FilterBar from "@/components/ui/filter/sideBar/FilterBar";
const DataResultPage = () => {
  return (
    <main className={scss.DataResultPage}>
      <div className={scss.content}>
        <FilterBar />
      </div>
    </main>
  );
};

export default DataResultPage;
