import React, { useEffect, useState, useCallback, memo } from "react";
import scss from "./FilterDropdownList.module.scss";
import ToggleButton from "../../toggle_button/ToggleButton";
import { FilterProps, Options } from "@/components/ui/filter/types/types";

interface ExtendedFilterProps extends FilterProps {
  defaultActive?: boolean;
  selectedValues?: string[];
}

const FilterDropdownList: React.FC<ExtendedFilterProps> = ({
  onChange,
  options,
  title,
  searchInput,
  searchPlaceholder,
  id,
  defaultActive = false,
  selectedValues,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultActive);
  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<Options[]>(options);

  // Filter options based on search value
  useEffect(() => {
    setFilteredOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, options]);

  // Set selected options from props if provided
  useEffect(() => {
    if (selectedValues && selectedValues.length > 0) {
      setSelectedOption(selectedValues);
    } else if (id) {
      // Legacy support for id-based selection
      const selected = options.filter((option) => option.id === id);
      if (selected.length > 0) {
        setSelectedOption([selected[0].value]);
      }
    }
  }, [id, options, selectedValues]);

  // Notify parent component when selection changes
  useEffect(() => {
    onChange(selectedOption);
  }, [selectedOption, onChange]);

  // Handle option selection with useCallback for better performance
  const selectOption = useCallback((value: string) => {
    setSelectedOption((selectedValues) => {
      const newValues = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
      
      return newValues;
    });
  }, []);

  // Toggle dropdown with useCallback for better performance
  const toggleDropdown = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  // Handle search input change
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

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
                onChange={handleSearchChange}
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

export default memo(FilterDropdownList);
