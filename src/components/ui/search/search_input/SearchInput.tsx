import React, { useState } from "react";
import scss from "./SearchInput.module.scss";
import { DebounceInput } from "react-debounce-input";
import SearchResultList from "../search-result/SearchResultList";
import { useSearchDataQuery } from "@/redux/api/data/search";
import { Radio, RadioChangeEvent, Spin } from "antd";

const searchOptions: {
  label: string;
  value: string;
}[] = [
  { label: "Название", value: "name" },
  { label: "Бренд", value: "search_brand" },
];
const SearchInput = () => {
  const [value, setValue] = useState<string>("");
  const [selectedOption, setOption] = useState<string>("name");
  const { data, isLoading, isFetching } = useSearchDataQuery({
    [selectedOption]: value,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSizeChange = (e: React.FormEvent<HTMLOptionElement>) => {
    setOption(e.currentTarget.value);
  };
  return (
    <div className={scss.SearchInput}>
      <div className={scss.input_wrapper}>
        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={handleChange}
          placeholder="Поиск..."
          className={scss.search_input}
        />
        <div className={scss.search_options}>
          {searchOptions.map((option) => (
            <option
              key={option.value}
              className={`${scss.option} ${
                selectedOption === option.value ? scss.active : ""
              }
               ${option.value === "name" ? scss.name_option : scss.brand_option}
              `}
              value={option.value}
              onClick={handleSizeChange}
            >
              {option.label}
            </option>
          ))}
        </div>
      </div>
      {value.length > 0 && (
        <div className={scss.search_list_content}>
          <div></div>
          {value.length > 0 && data ? (
            <SearchResultList data={data} option={selectedOption} />
          ) : isLoading || isFetching ? (
            <div className={scss.search_loading}>
              <Spin spinning={true} size="default" />
            </div>
          ) : (
            <div className={scss.search_not_found}>
              <img src="/assets/images/no-data.png" alt="no-data" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
