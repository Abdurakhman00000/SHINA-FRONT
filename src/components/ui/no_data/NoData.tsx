import React from "react";
import scss from "./NoData.module.scss";
import Image from "next/image";
const NoData = () => {
  return (
    <div className={scss.NoData}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.no_data_wrapper}>
            <Image
              src="/assets/images/no-data.png"
              alt="no-data"
              width={300}
              height={300}
            />
            <p className={scss.no_data_title}>Нет данных</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoData;
