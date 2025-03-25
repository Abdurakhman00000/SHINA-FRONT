import React from "react";
import scss from "./Brands.module.scss";
import { brands } from "@/components/ui/filter/types/options/brand";
import Link from "next/link";
import Image from "next/image";
const Brands = () => {
  return (
    <div className={scss.Brands}>
      <div className={scss.content}>
        <h2 className={scss.brand_title}>Бранды</h2>
        <ul className={scss.brand_list}>
          {brands.map((brand) => (
            <li key={brand.id} className={scss.brand_list_item}>
              <Link
                href={`/data-results/${brand.id}`}
                className={scss.brand_link}
              >
                {brand.img && (
                  <Image
                    src={brand.img!}
                    alt={brand.value}
                    width={300}
                    height={100}
                  />
                )}
                {brand.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Brands;
