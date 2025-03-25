import React, { useEffect, useState } from "react";
import scss from "./FilterDropdownInput.module.scss";
import ToggleButton from "../../toggle_button/ToggleButton"; 

import { DebounceInput } from "react-debounce-input";
import { FilterDropdownInputProps } from "@/components/ui/filter/types/types";
const FilterDropdownInput: React.FC<FilterDropdownInputProps> = ({
  onChange,
  placeholder,
  title,
  inputType, 
  placeholders,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const [inputValue, setInputValue] = useState<string>();
  const [inputValues, setInputValues] = useState<string[]>([]);

  useEffect(() => {
    inputType == "one"
      ? onChange(inputValue!)
      : inputType == "two"
      ? onChange(inputValues)
      : null;
  }, [inputValues, inputValue]);

  const handleInputChange = (index: number, value: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };
  return (
    <div className={scss.FilterDropdownInput}>
      <div className={scss.content}>
        <ToggleButton title={title} isOpen={isOpen} toggle={toggleDropdown} />
        {isOpen && (
          <>
            {inputType === "one" ? (
              <div className={scss.input_box}>
                <DebounceInput
                  debounceTimeout={500}
                  type="text"
                  placeholder={placeholder}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
            ) : inputType === "two" ? (
              <div className={scss.input_box}>
                <DebounceInput
                  debounceTimeout={500}
                  type="text"
                  placeholder={`От ${placeholders![0]}`}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  className={scss.input_two}
                />
                <DebounceInput
                  debounceTimeout={500}
                  type="text"
                  placeholder={`До ${placeholders![1]}`}
                  onChange={(e) => handleInputChange(1, e.target.value)}
                  className={scss.input_two}
                />
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

export default FilterDropdownInput;
