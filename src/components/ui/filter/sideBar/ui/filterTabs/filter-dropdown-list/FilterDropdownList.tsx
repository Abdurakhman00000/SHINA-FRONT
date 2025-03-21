import React, { useEffect, useState } from "react";
import scss from "./FilterDropdownList.module.scss";
import ToggleButton from "../../toggle_button/ToggleButton";

const FilterDropdownList: React.FC<FilterProps> = ({
  onChange,
  options,
  title,
  searchInput,
  searchPlaceholder,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<Options[]>([]);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  useEffect(() => {
    onChange(selectedOption);
  }, [selectedOption]);

  const selectOption = (value: string) => {
    setSelectedOption((selectedValues) =>
      selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value]
    );
  };
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className={scss.FilterDropdown}>
      <div className={scss.content}>
        <ToggleButton title={title} isOpen={isOpen} toggle={toggleDropdown} />
        {isOpen && (
          <div className={scss.filter_dropdown}>
            {searchInput && (
              <input
                type="text"
                className={scss.search_input}
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            )}
            <ul className={scss.dropdown_list}>
              {filteredOptions.length === 0 ? (
                <div className={scss.not_found_value}>
                  <p>Не найдено</p>
                </div>
              ) : (
                (searchValue.length > 0 ? filteredOptions : options).map(
                  (option) => (
                    <li key={option.id} className={scss.dropdown_list_item}>
                      <input
                        type="checkbox"
                        checked={
                          Array.isArray(selectedOption) &&
                          selectedOption.includes(option.value)
                        }
                        onChange={() => selectOption(option.value)}
                        className={scss.dropdown_checkbox}
                      />
                      <label className={scss.dropdown_label}>
                        {option.label}
                      </label>
                    </li>
                  )
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterDropdownList;
