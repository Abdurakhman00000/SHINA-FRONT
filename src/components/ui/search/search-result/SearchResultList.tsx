import React from "react";
import scss from "./SearchResultList.module.scss";
import Link from "next/link";
interface SearchResultListProps {
  data: Product;
  option?: string;
}
const SearchResultList: React.FC<SearchResultListProps> = ({
  data,
  option,
}) => {
  return (
    <ul className={scss.SearchResultList}>
      {data.results.map((item) => (
        <li key={item.id} className={scss.search_list_items}>
          <Link
            href={`/details-page/${item.id}`}
            className={scss.search_list_items_link}
          >
            <picture>
              <img
                src={item.images[0]}
                alt="image"
                style={{ width: 30, height: 30, borderRadius: "50%" }}
              />
            </picture>
            <p className={scss.name}>
              {option === "name" ? item.product_name : item.brand}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResultList;
