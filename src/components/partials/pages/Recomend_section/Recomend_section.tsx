import React from 'react'
import scss from "./Recomend_section.module.scss"
import Product_card from '@/components/ui/cards/product_card/Product_card'

const Recomend_section = () => {
  return (
    <section className={scss.Main}>
        <div className="container">
            <div className={scss.content}>
                <h1>Рекомендуемые</h1>

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

export default Recomend_section