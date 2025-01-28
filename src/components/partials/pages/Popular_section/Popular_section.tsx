import React from 'react'
import scss from "./Popular_section.module.scss"
import Product_card from '@/components/ui/cards/product_card/Product_card'


const Popular_section = () => {
  return (
    <section className={scss.Main}>
        <div className="container">
            <div className={scss.content}>
                <h1>Популярные</h1>

                <div className={scss.main_card}>
                <Product_card/>
                <Product_card/>
                <Product_card/>
                <Product_card/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Popular_section