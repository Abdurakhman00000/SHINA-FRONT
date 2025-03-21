interface FilterProps {
  title: string;
  options: Options[];
  onChange: (options: string[]) => void;
  searchInput?: boolean;
  searchPlaceholder?: string;
}

interface Options {
  id: number;
  label: string;
  value: string;
}

type InputType = "two" | "one";
interface FilterDropdownInputProps {
  title: string;
  placeholder?: string;
  placeholders?: string[];
  onChange: (value: string | string[]) => void;
  inputType: InputType;
}
