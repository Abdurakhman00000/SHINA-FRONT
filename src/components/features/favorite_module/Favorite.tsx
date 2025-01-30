import React from "react";
import scss from "./Favorite.module.scss";

const Favorite = () => {
  return (
    <section className={scss.Main}>
      <div className="container">
      <div className={scss.content}>
        <p>Favorite page</p>
      </div>
      </div>
    </section>
  );
};

export default Favorite;
