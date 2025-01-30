import React from 'react'
import scss from "./DetailsPage.module.scss"

const DetailsPage = () => {
  return (
    <section className={scss.Main}>
        <div className="container">
            <div className={scss.content}>
                <p>Details page</p>
            </div>
        </div>
    </section>
  )
}

export default DetailsPage