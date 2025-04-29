import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import scss from "./FilterBar.module.scss";
import FilterDropdownList from "./ui/filterTabs/filter-dropdown-list/FilterDropdownList";
import {
  index_of_speed,
  seasonality,
  spikes_data,
} from "../types/options/data";
import FilterDropdownInput from "./ui/filterTabs/filter-dropdown-input/FilterDropdownInput";
import All_data_page from "@/components/partials/pages/All_data_page/All_data_page";
import { useGetDataQuery } from "@/redux/api/data";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { generateQueryParams } from "@/utils/generateQueryParams";
import NoData from "../../no_data/NoData";
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";
import { useParams } from "next/navigation";
import { brands } from "../types/options/brand";
import { useCatalogModalStore } from "@/store/useCatalogModalStore";

const FilterBar = () => {
  const { id } = useParams();
  const { setIsOpen: setIsCatalogModalOpen } = useCatalogModalStore();
  const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);
  const [diametr, setDiametr] = useState<string[]>([]);
  const [seasons, setSeasons] = useState<string[]>([]);
  const [widthOfProfile, setWidthOfProfile] = useState<string[]>([]);
  const [heigthOfProfile, setHeightOfProfile] = useState<string[]>([]);
  const [indexOfSpeed, setIndexOfSpeed] = useState<string[]>([]);
  const [spikes, setSpikes] = useState<string[]>([]);
  const [loadIndex, setLoadIndex] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  // Close catalog modal when component mounts
  useEffect(() => {
    setIsCatalogModalOpen(false);
  }, [setIsCatalogModalOpen]);

  useEffect(() => {
    if (id) {
      setSelectedBrand([]);
      setSelectedPrice([]);
      setDiametr([]);
      setWidthOfProfile([]);
      setHeightOfProfile([]);
      setIndexOfSpeed([]);
      setSpikes([]);
      setLoadIndex("");
      
      const seasonOption = seasonality.find(season => season.id === parseInt(id as string, 10));
      if (seasonOption) {
        setSeasons([seasonOption.value]);
      }
    }
  }, [id]);

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
      spikes,
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
    spikes,
  ]);

  const { data, isLoading, isFetching, error } = useGetDataQuery(queryString, {
    // Add caching options to improve performance
    refetchOnMountOrArgChange: false,
    skip: false,
  });
  
  const menuRef = useRef<HTMLDivElement>(null);
  
  const handleOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

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
  
  const next = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);
  
  const prev = useCallback(() => {
    setPage((prevPage) => prevPage > 1 ? prevPage - 1 : prevPage);
  }, []);

  const handleBrandChange = useCallback((value: string[]) => {
    setSelectedBrand(value);
    setIsOpen(false);
  }, []);

  const handleSeasonChange = useCallback((value: string[]) => {
    setSeasons(value);
    setIsOpen(false);
  }, []);

  const handleSpikesChange = useCallback((value: string[]) => {
    setSpikes(value);
    setIsOpen(false);
  }, []);

  const handlePriceChange = useCallback((values: any) => {
    if (Array.isArray(values)) {
      setSelectedPrice(values);
    }
    setIsOpen(false);
  }, []);

  const handleWidthChange = useCallback((values: any) => {
    if (Array.isArray(values)) {
      setWidthOfProfile(values);
    }
    setIsOpen(false);
  }, []);

  const handleHeightChange = useCallback((values: any) => {
    if (Array.isArray(values)) {
      setHeightOfProfile(values);
    }
    setIsOpen(false);
  }, []);

  const handleDiametrChange = useCallback((values: any) => {
    if (Array.isArray(values)) {
      setDiametr(values);
    }
    setIsOpen(false);
  }, []);

  const handleSpeedIndexChange = useCallback((value: string[]) => {
    setIndexOfSpeed(value);
    setIsOpen(false);
  }, []);

  const handleLoadIndexChange = useCallback((values: any) => {
    if (typeof values === 'string') {
      setLoadIndex(values);
    }
    setIsOpen(false);
  }, []);

  const filterContent = useMemo(() => (
    <div
      className={`${scss.filters} ${isOpen ? scss.active : ""}`}
      ref={menuRef}
    >
      <FilterDropdownInput
        title="Цена"
        inputType="two"
        placeholders={["1500", "170000"]}
        onChange={handlePriceChange}
      />
      <FilterDropdownList
        key="brand"
        title="Бренд"
        options={brands}
        onChange={handleBrandChange}
        searchInput={true}
        searchPlaceholder="Поиск бренда..."
      />
      <FilterDropdownList
        key="seasonality"
        title="Сезонность"
        options={seasonality}
        onChange={handleSeasonChange}
        defaultActive={true}
        selectedValues={seasons}
      />
      <FilterDropdownList
        key="spikes"
        title="Шипы"
        options={spikes_data}
        onChange={handleSpikesChange}
      />
      <FilterDropdownInput
        title="Ширина профиля"
        placeholders={["170", "1700"]}
        inputType="two"
        onChange={handleWidthChange}
      />
      <FilterDropdownInput
        title="Высота профиля"
        placeholders={["170", "1700"]}
        inputType="two"
        onChange={handleHeightChange}
      />
      <FilterDropdownInput
        title="Диаметр"
        placeholders={["170", "1700"]}
        inputType="two"
        onChange={handleDiametrChange}
      />
      <FilterDropdownList
        key="speed-index"
        title="Индекс скорости"
        options={index_of_speed}
        onChange={handleSpeedIndexChange}
      />
      <FilterDropdownInput
        title="Индекс нагрузки"
        inputType="one"
        placeholder="Индекс нагрузки"
        onChange={handleLoadIndexChange}
      />
    </div>
  ), [
    isOpen, 
    handleBrandChange, 
    handleSeasonChange, 
    handleSpikesChange, 
    handlePriceChange,
    handleWidthChange,
    handleHeightChange,
    handleDiametrChange,
    handleSpeedIndexChange,
    handleLoadIndexChange,
    seasons
  ]);

  const contentDisplay = useMemo(() => {
    if (isLoading || isFetching) {
      return (
        <div className={scss.filter_spin}>
          <Spin indicator={<LoadingOutlined spin />} size="large" />
        </div>
      );
    }
    
    if (data && !error) {
      return <All_data_page data={data} next={next} prev={prev} page={page} />;
    }
    
    return <NoData />;
  }, [isLoading, isFetching, data, error, next, prev, page]);

  return (
    <section className={scss.FilterBar}>
      <div className={scss.content}>
        <button className={scss.filter_toggle} onClick={handleOpen}>
          {isOpen ? <MdFilterAltOff size={30} /> : <MdFilterAlt size={30} />}
        </button>
        {filterContent}
        {contentDisplay}
      </div>
    </section>
  );
};

export default React.memo(FilterBar);
