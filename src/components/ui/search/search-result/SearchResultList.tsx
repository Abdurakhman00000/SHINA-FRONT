import React from "react";
import scss from "./SearchResultList.module.scss";
import Link from "next/link";
interface SearchResultListProps {
  data: Product;
}
const SearchResultList: React.FC<SearchResultListProps> = ({ data }) => {
  return (
    <ul className={scss.SearchResultList}>
      {data.results.map((item) => (
        <li key={item.id} className={scss.search_list_items}>
          <Link
            href={`/details-page/${item.id}`}
            className={scss.search_list_items_link}
          >
            <p className={scss.name}>{item.product_name}</p>
            <p>{item.price}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResultList;
