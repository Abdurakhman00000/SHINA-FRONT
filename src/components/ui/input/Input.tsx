import React from 'react'
import scss from "./Input.module.scss"

const Input = () => {
  return (
    <div className={scss.Main}>
    <input type="text" placeholder='search...'/>
    </div>
  )
}

export default Input