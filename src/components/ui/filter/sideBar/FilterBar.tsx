import React, { useEffect, useMemo, useRef, useState } from "react";
import scss from "./FilterBar.module.scss";
import FilterDropdownList from "./ui/filterTabs/filter-dropdown-list/FilterDropdownList";
import { brands, index_of_speed, seasonality } from "../types/options/data";
import FilterDropdownInput from "./ui/filterTabs/filter-dropdown-input/FilterDropdownInput";
import All_data_page from "@/components/partials/pages/All_data_page/All_data_page";
import { useGetDataQuery } from "@/redux/api/data";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { generateQueryParams } from "@/utils/generateQueryParams";
import NoData from "../../no_data/NoData";
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";
const FilterBar = () => {
  const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);
  const [diametr, setDiametr] = useState<string[]>([]);
  const [seasons, setSeasons] = useState<string[]>([]);
  const [widthOfProfile, setWidthOfProfile] = useState<string[]>([]);
  const [heigthOfProfile, setHeightOfProfile] = useState<string[]>([]);
  const [indexOfSpeed, setIndexOfSpeed] = useState<string[]>([]);
  const [loadIndex, setLoadIndex] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const queryString = useMemo(() => {
    return generateQueryParams({
      selectedBrand,
      selectedPrice,
      diametr,
      seasons,
      widthOfProfile,
      heigthOfProfile,
      indexOfSpeed,
      loadIndex,
      page,
    });
  }, [
    selectedBrand,
    selectedPrice,
    diametr,
    seasons,
    widthOfProfile,
    heigthOfProfile,
    indexOfSpeed,
    loadIndex,
    page,
  ]);

  const { data, isLoading, isFetching, error } = useGetDataQuery(queryString);
  console.log(data);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef: React.Ref<HTMLDivElement> | undefined = useRef(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const next = () => {
    setPage(page + 1);
  };
  const prev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return (
    <section className={scss.FilterBar}>
      <div className={scss.content}>
        <button className={scss.filter_toggle} onClick={handleOpen}>
          {isOpen ? <MdFilterAltOff size={30} /> : <MdFilterAlt size={30} />}
        </button>
        <div
          className={`${scss.filters} ${isOpen ? scss.active : ""}`}
          ref={menuRef}
        >
          <FilterDropdownInput
            title="Цена"
            inputType="two"
            placeholders={["1500", "170000"]}
            onChange={(values) => setSelectedPrice(values as string[])}
          />
          <FilterDropdownList
            key="brand"
            title="Бренд"
            options={brands}
            onChange={(value) => setSelectedBrand(value)}
            searchInput={true}
            searchPlaceholder="Поиск бренда..."
          />
          <FilterDropdownList
            key="seasonality"
            title="Сезонность"
            options={seasonality}
            onChange={(value) => setSeasons(value)}
          />
          <FilterDropdownInput
            title="Ширина профиля"
            placeholders={["170", "1700"]}
            inputType="two"
            onChange={(value) => setWidthOfProfile(value as string[])}
          />
          <FilterDropdownInput
            title="Высота профиля"
            placeholders={["170", "1700"]}
            inputType="two"
            onChange={(value) => setHeightOfProfile(value as string[])}
          />
          <FilterDropdownInput
            title="Диаметр"
            placeholders={["170", "1700"]}
            inputType="two"
            onChange={(value) => setDiametr(value as string[])}
          />
          <FilterDropdownList
            key="speed-index"
            title="Индекс скорости"
            options={index_of_speed}
            onChange={(value) => setIndexOfSpeed(value)}
          />
          <FilterDropdownInput
            title="Индекс нагрузки"
            inputType="one"
            placeholder="Индекс нагрузки"
            onChange={(values) => setLoadIndex(values as string)}
          />
        </div>
        {isLoading || isFetching ? (
          <div className={scss.filter_spin}>
            <Spin indicator={<LoadingOutlined spin />} size="large" />
          </div>
        ) : data && !error ? (
          <All_data_page data={data} next={next} prev={prev} page={page} />
        ) : (
          <NoData />
        )}
      </div>
    </section>
  );
};

export default FilterBar;
