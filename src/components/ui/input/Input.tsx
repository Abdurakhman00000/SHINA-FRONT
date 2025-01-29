import React from 'react'
import scss from "./Input.module.scss"
import { LuSearch } from "react-icons/lu";


const Input = () => {
  return (
    <section>
        <div className={scss.Search_main}>
        <div className={scss.searchBar}>
          <input
            type="text"
            className={scss.input}
            placeholder="Поиск по сайту..."
          />
          <button className={scss.button}>
            <LuSearch />
          </button>
        </div>
        </div>
    </section>
  )
}

export default Input