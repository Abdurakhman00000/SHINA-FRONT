import React from 'react'
import scss from "./Popular_section.module.scss"

const Popular_section = () => {
  return (
    <section className={scss.Main}>
        <div className="container">
            <div className={scss.content}>
                <h1>Popular section</h1>
            </div>
        </div>
    </section>
  )
}

export default Popular_section