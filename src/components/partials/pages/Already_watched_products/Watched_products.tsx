import React from "react";
import scss from "./Watched.module.scss";

const Watched_products = () => {
  return (
    <section className={scss.Main}>
      <div className="container">
      <div className={scss.content}>
        <h1>Already watched products</h1>
      </div>
      </div>
    </section>
  );
};

export default Watched_products;
