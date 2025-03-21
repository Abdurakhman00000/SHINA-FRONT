import React, { useState } from "react";
import scss from "./SearchInput.module.scss";
import { DebounceInput } from "react-debounce-input";
import SearchResultList from "../search-result/SearchResultList";
import { useSearchDataQuery } from "@/redux/api/data/search";
const SearchInput = () => {
  const [value, setValue] = useState<string>("");
  const { data, isLoading, isFetching } = useSearchDataQuery({ name: value });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className={scss.SearchInput}>
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        onChange={handleChange}
        placeholder="Поиск..."
        className={scss.search_input}
      />
      {value.length > 0 && (
        <div className={scss.search_list_content}>
          <div>
            
          </div>
          {value.length > 0 && data ? (
            <SearchResultList data={data} />
          ) : isLoading || isFetching ? (
            <div className={scss.search_loading}>
              <p>Загрузка</p>
            </div>
          ) : (
            <div className={scss.search_input}>
              <p>Не нейдено</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
