"use client";
import React, { useEffect } from "react";
import scss from "./Compare.module.scss";
import CompareCardList from "@/components/ui/list/CompareCardList";
import { useLoacalStorageData } from "@/store/useLocalStorageData";
const Compare = () => {
  const {comparesData,setCompareTyres} = useLoacalStorageData();
  useEffect(() => {
    const compareTyres = JSON.parse(localStorage.getItem("compares") as string);
    setCompareTyres(compareTyres);
  }, []);

  const handleDelete = (id: number) => {
    const filteredTyres = comparesData.filter((t) => t.id !== id);
    localStorage.setItem("compares", JSON.stringify(filteredTyres));
    const updatedTyresData = JSON.parse(
      localStorage.getItem("compares") as string
    );
    setCompareTyres(updatedTyresData);
  };

  return (
    <section className={scss.Main}>
      <div className={scss.content}>
        <CompareCardList tyres={comparesData} handleDelete={handleDelete} />
      </div>
    </section>
  );
};
// test
export default Compare;
