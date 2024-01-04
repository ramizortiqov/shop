import React, { useState } from "react";
import { BsCart4, BsTelephoneFill } from "react-icons/bs";
import Contact from "./Contact";
import Order from "./Order";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import Catalog from "./Catalog";
import { Link } from "react-router-dom";
const showOrders = ({ orders, onDelete, deleteAll, items }) => {
  let summa = 0;
  orders.forEach((el) => (summa += el.price));
  return (
    <div>
      {orders.map((el) => (
        <Order
          items={items}
          onDelete={onDelete}
          key={el.id}
          item={el}
        />
      ))}
      <p className="summa">Сумма: {new Intl.NumberFormat().format(summa)}$</p>
      <button className="delete-all" onClick={deleteAll}>
        Удалить все
      </button>
    </div>
  );
};
export default function Header({
  orders,
  onDelete,
  deleteAll,
  items,
  searchTerm,
  searchClick,
  searchItems,
  categories,
  favourites,
}) {
  let [cartOpen, setCartOpen] = useState(false);
  let [contact, setContact] = useState(false);
  let summa = 0;
  orders.forEach((el) => (summa += el.price));
  return (
    <div className="header">
      <header>
        <span className="logo">
          <Link to="/">Shop</Link>
        </span>
        <Catalog categories={categories} />
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Поиск по магазину..."
            value={searchTerm}
            onChange={searchItems}
          />
          <FaSearch className="fasearch" onClick={searchClick} />
        </div>
        <div className="nav-con">
          <ul className="nav">
            <li>
              <AiOutlineUser className="faffa" />
            </li>
            <li onClick={() => console.log(favourites)}>
              <Link to="/favourites">
                <FaRegHeart
                  className="faffa"
                  onMouseOver={() => {
                    setContact(false);
                    setCartOpen(false);
                  }}
                />
              </Link>
            </li>
            <li
              onMouseOver={() => {
                setContact((contact = true));
                setCartOpen((cartOpen = false));
              }}
            >
              <BsTelephoneFill className="faffa" />
            </li>
            <li>
              <span
                onMouseOver={() => {
                  setContact(false);
                  orders.length > 0 && setCartOpen(true);
                }}
                className={`shop-cart-button ${cartOpen && "active"}`}
              >
                <span className="cart-length">{orders.length}</span>
                <BsCart4 />
                <div className="cart-side">
                  {orders.length > 0 ? (
                    <p>
                      <span>Сумма</span>
                      <br />
                      <>{summa}$</>
                    </p>
                  ) : (
                    "В корзине нет товаров"
                  )}
                </div>
              </span>
              {cartOpen && (
                <div
                  onMouseLeave={() => setCartOpen(false)}
                  className="shop-cart"
                >
                  {showOrders({
                    orders,
                    onDelete,
                    deleteAll,
                    items,
                  })}
                </div>
              )}
            </li>
          </ul>
        </div>
      </header>
      {contact && (
        <div onMouseLeave={() => setContact((contact = false))}>
          <Contact />
        </div>
      )}
    </div>
  );
}
