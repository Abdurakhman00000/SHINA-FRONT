import React from "react";
import scss from "./CardSkeleton.module.scss";
const CardSkeleton = () => {
  return (
    <div className={scss.CardSkeleton}>
      <div className="skeleton" style={{ width: 250, height: 200 }} />
      <div className={scss.product_info}>
        <div className={scss.price}>
          <p className="skeleton" style={{ width: 150, height: 30 }}></p>
          <p className="skeleton" style={{ width: 100, height: 20 }}></p>
        </div>
        <div className={scss.title}>
          <h1 className="skeleton" style={{ width: 200, height: 30 }}></h1>
          <p className="skeleton" style={{ width: 100, height: 20 }}></p>
        </div>
        <div className={scss.button}>
          <span className="skeleton" style={{ width: 150, height: 50 }} />
          <span className="skeleton" style={{ width: 50, height: 50 }} />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
