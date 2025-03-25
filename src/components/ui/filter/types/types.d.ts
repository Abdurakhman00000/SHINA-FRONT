import { StaticImageData } from "next/image";
interface FilterProps {
  title: string;
  options: Options[];
  onChange: (options: string[]) => void;
  searchInput?: boolean;
  searchPlaceholder?: string;
  id?: number;
}

interface Options {
  id: number;
  label: string;
  value: string;
  img?: StaticImageData;
}

type InputType = "two" | "one";
interface FilterDropdownInputProps {
  title: string;
  placeholder?: string;
  placeholders?: string[];
  onChange: (value: string | string[]) => void;
  inputType: InputType;
}
