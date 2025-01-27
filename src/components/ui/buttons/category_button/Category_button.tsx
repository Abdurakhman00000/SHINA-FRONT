import React from 'react'
import scss from "./Category_button.module.scss"
import { CgMenuGridO } from "react-icons/cg";



const Category_button = () => {
  return (
    <button className={scss.button}> <CgMenuGridO/> Каталог</button>
  )
}

export default Category_button