import React from 'react'
import scss from "./Footer.module.scss"
import { GoPaperAirplane } from "react-icons/go";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.form}>
            <h2>Logo</h2>
            <div className={scss.feedback}>
              <p>Свяжитесь с нами</p>
              <form className={scss.input}>
              <input 
                type="text"
                placeholder="E-mail почта, номер телефона..."
              />
              <button type="submit">
                <GoPaperAirplane /> 
              </button>
            </form>
            </div>
          </div>

          <div className={scss.block1}>
            <h4>Категории</h4>
            <p>Шины</p>
            <p>Диски</p>
            <p>Мотоциклетные шины</p>
            <p>Коммерческие шины</p>
          </div>

          <div className={scss.block2}>
            <h4>Клиентам</h4>
            <p>О компании</p>
            <p>Контакты</p>
            <p>Блог</p>
            <p>Правовая информация</p>
          </div>

          <div className={scss.block3}>
            <h4>Магазинам</h4>
            <p>Подключить магазин</p>
            <p>Расместить рекламу</p>
            <p>Правила размещения</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer