import React from 'react'
import scss from "./BottomSiteBar.module.scss"

const BottomSiteBar = () => {
  return (
    <section className={scss.Main}>
        <div className="container">
            <div className={scss.content}>
                <h1>SiteBar</h1>
            </div>
        </div>
    </section>
  )
}

export default BottomSiteBar;