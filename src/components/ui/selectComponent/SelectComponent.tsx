"use client";

import React, { useState } from "react";
import Select from "react-select";
import scss from "./SelectComponent.module.scss";

interface OptionType {
  value: string;
  label: string;
}

interface SelectComponentProps {
  options: OptionType[];
  onChange?: (selectedOption: OptionType | null) => void;
  placeholder?: string;
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  options,
  onChange,
  placeholder,
}) => {
  const [customId] = useState(
    `react-select-${Math.random().toString(36).substr(2, 9)}`
  );

  return (
    <div className={scss.selectWrapper}>
      <Select
        className={scss.select}
        classNamePrefix="custom"
        id={customId}
        options={options}
        onChange={onChange}
        placeholder={placeholder || "Выберите..."}
      />
    </div>
  );
};

export default SelectComponent;
