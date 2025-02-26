import { IconType } from "react-icons";
import { FaFire } from "react-icons/fa6";
import { MdOutlineDiscount } from "react-icons/md";

interface Nav {
  id: number;
  name: string;
  icon: IconType | null;
  link: string;
}
export const nav_links: Nav[] = [
  {
    id: 1,
    name: "Подбор по авто",
    icon: FaFire,
    link: "",
  },
  {
    id: 2,
    name: "Скидки дня",
    icon: MdOutlineDiscount,
    link: "",
  },
  {
    id: 3,
    name: "Блог",
    icon: null,
    link: "",
  },
  {
    id: 4,
    name: "Бренды",
    icon: null,
    link: "",
  },
  {
    id: 5,
    name: "Шины",
    icon: null,
    link: "",
  },
  {
    id: 6,
    name: "Диски",
    icon: null,
    link: "",
  },
];
