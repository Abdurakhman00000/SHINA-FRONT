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
            <p className={scss.name}>
              {option === "name" ? item.product_name : item.brand}
            </p>
            <p>{item.price}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResultList;
