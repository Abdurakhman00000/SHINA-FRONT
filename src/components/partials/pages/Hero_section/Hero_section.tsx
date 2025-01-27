import React from 'react'
import scss from "./Hero_section.module.scss"

const Hero_section = () => {
  return (
    <section className={scss.Main}>
        <div className="container">
            <div className={scss.content}>
                <h1>Hero_section</h1>
            </div>
        </div>
    </section>
  )
}

export default Hero_section