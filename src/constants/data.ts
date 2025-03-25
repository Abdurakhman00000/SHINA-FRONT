import { StaticImageData } from "next/image";
import allseason from "../../public/assets/catalog_images/allseason.png";
import winter from "../../public/assets/catalog_images/winter.png";
import summer from "../../public/assets/catalog_images/summer.png";

interface Catalog {
  id: number;
  type: string;
  img: StaticImageData;
}
export const catalogs: Catalog[] = [
  {
    id: 1,
    type: "Летние",
    img: summer,
  },
  {
    id: 2,
    type: "Зимние",
    img: winter,
  },
  {
    id: 3,
    type: "Всесезонные",
    img: allseason,
  },
];
