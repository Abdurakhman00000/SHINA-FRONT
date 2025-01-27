import React from 'react'
import Hero_section from './pages/Hero_section/Hero_section'
import Popular_section from './pages/Popular_section/Popular_section'
import Category_section from './pages/Сategory_section/Category_section'
import Recomend_section from './pages/Recomend_section/Recomend_section'
import Watched_products from './pages/Already_watched_products/Watched_products'

const MainPage = () => {
  return (
    <>
    <Hero_section/>
    <Popular_section/>
    <Category_section/>
    <Recomend_section/>
    <Watched_products/>
    </>
  )
}

export default MainPage