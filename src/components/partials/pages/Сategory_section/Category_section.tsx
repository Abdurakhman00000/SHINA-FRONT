import React from 'react'
import scss from "./Category.module.scss"
import Category_card from '@/components/ui/cards/category_card/Category_card'

const Category_section = () => {
  return (
    <section className={scss.Main}>
        <div className="container">
            <div className={scss.content}>
                <h1>Категории</h1>

                <div className={scss.main_card}>
                  <Category_card/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Category_section