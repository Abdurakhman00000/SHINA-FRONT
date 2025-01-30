import React from 'react'
import scss from "./FilterSiteBar.module.scss"

const FilterSiteBar = () => {
  return (
    <section className={scss.Main}>
        <div className="container">
            <div className={scss.content}>
                filter
            </div>
        </div>
    </section>
  )
}

export default FilterSiteBar