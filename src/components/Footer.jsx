import React from "react";
import { Link } from "react-router-dom";
import Brands from "./Brands";

export default function Footer({brands, categories}) {
  return (
    <footer>
      <div>
        <h3>Интернет магазин</h3>
        <ul className="footer-list">
          <li>
            <Link to="">О нас</Link>
          </li>
          <li>
            <Link to="">Доставка</Link>
          </li>
          <li>
            <Link to="">Оплата</Link>
          </li>
          <li>
            <Link to="">Покупка в кредит</Link>
          </li>
          <li>
            <Link to="">Акции</Link>
          </li>
          <li>
            <Link to="">Новости</Link>
          </li>
          <li>
            <Link to="">Обзоры</Link>
          </li>
          <li>
            <Link to="">
              Условия продажи и политика обработки персональных данных
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Компания</h3>
        <ul className="footer-list">
          <li>
            <Link to="">Кто мы</Link>
          </li>
          <li>
            <Link to="">Корпоративным клиентам</Link>
          </li>
          <li>
            <Link to="">Арендодателям</Link>
          </li>
          <li>
            <Link to="">Благотворительност</Link>
          </li>
          <li>
            <Link to="">Контакты</Link>
          </li>
          <li>
            <Link to="">Руководства</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Помощь покупателю</h3>
        <ul className="footer-list">
          <li>
            <Link to="">Обратная связь</Link>
          </li>
          <li>
            <Link to="">Адреса магазинов</Link>
          </li>
          <li>
            <Link to="">Обмен, возврат и ремонт</Link>
          </li>
          <li>
            <Link to="">Гарантия</Link>
          </li>
          <li>
            <Link to="">Статус ремонта</Link>
          </li>
          <li>
            <Link to="">Адреса сервисных центров</Link>
          </li>
          <li>
            <Link to="">Дополнительные услуги и сервис</Link>
          </li>
          <li>
            <Link to="">Поддержка через Telegram</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Пресс-центр</h3>
        <ul className="footer-list">
          <li>
            <Link to="">История</Link>
          </li>
          <li>
            <Link to="">Миссия и ценности</Link>
          </li>
          <li>
            <Link to="">Пресс-релизы</Link>
          </li>
          <li>
            <Link to="">СМИ о нас</Link>
          </li>
          <li>
            <Link to="">Фотографии</Link>
          </li>
          <li>
            <Link to="">Контакты для прессы</Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="contact-number">
          <Link to="">
            <h3>1 (234) 567-89-00</h3>
            <span>Поддержка</span>
          </Link>
        </div>
        <div className="markets">
          <Link to="">
            <div className="play-market"></div>
          </Link>
          <Link to="">
            <div className="app-store play-market"></div>
          </Link>
          <Link to="">
            <div className="app-gallery play-market"></div>
          </Link>
        </div>
      </div>
      <nav>
      <ul>
            {categories.map((el) => (
                <Link key={el.id} to={`/${el.category}`}>
                 <li>{el.icon} {el.name}</li>
                </Link>
            ))}
          </ul>
       <Brands brands={brands} />
       <div>© ООО «SHOP» 2002—2023. Все права защищены. Указанная в интернет-магазине цена товаров и условия их приобретения действительны на текущую дату.</div>
      </nav>
    </footer>
  );
}
