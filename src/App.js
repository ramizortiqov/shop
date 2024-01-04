import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { SiSamsung, SiApple, SiHuawei, SiXiaomi } from "react-icons/si";
import { FiSmartphone } from "react-icons/fi";
import { BsSmartwatch, BsLaptop } from "react-icons/bs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Favourites from "./components/Favourites";
import Samsung from "./catalog/brands/Samsung";
import Categories from "./catalog/Categories";
import Home from "./Pages/Home";
import { product } from "./data";
import "./index.css";

export default function App() {
  const [orders, setOrders] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [currentItems, setCurrentItems] = useState(product);
  const [searchTerm, setSearchTerm] = useState("");
  const categories = [
    {
      id: 1,
      category: "phones",
      icon: <FiSmartphone />,
      name: "Смартфоны",
    },
    {
      id: 2,
      category: "laptops",
      icon: <BsLaptop />,
      name: "Ноутбуки и компюьтеры",
    },
    {
      id: 3,
      category: "watches",
      icon: <BsSmartwatch />,
      name: "Смарт-часы",
    },
    {
      id: 4,
      category: "accessories",
      icon: <FiSmartphone />,
      name: "Аксессуары",
    },
  ];

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders"));
    if (savedOrders) {
      setOrders(savedOrders);
    }
    const savedLikes = JSON.parse(localStorage.getItem("favourites"));
    if (savedLikes) {
      setFavourites(savedLikes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);
  const addToOrder = (item) => {
    if (!orders.find((el) => el.id === item.id)) {
      setOrders([...orders, item]);
    }
  };

  const brands = [
    {
      key: "samsung",
      name: <SiSamsung size={100} />,
    },
    {
      key: "apple",
      name: (
        <span style={{ display: "flex", alignItems: "center" }}>
          <b>APPLE</b>
          <SiApple size={30} style={{ marginLeft: 5 }} />
        </span>
      ),
    },
    {
      key: "huawei",
      name: (
        <span style={{ display: "flex", alignItems: "center" }}>
          <b>HUAWEI</b>
          <SiHuawei size={30} style={{ marginLeft: 5 }} />
        </span>
      ),
    },
    {
      key: "mi",
      name: (
        <span style={{ display: "flex", alignItems: "center" }}>
          <b>XIAOMI</b>
          <SiXiaomi
            size={30}
            color="rgb(255, 106, 0)"
            style={{ marginLeft: 5 }}
          />
        </span>
      ),
    },
  ];
  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  };
  const deleteAll = () => {
    setOrders([]);
  };
  const likeThis = (item) => {
    if (!favourites.find((el) => el.id === item.id)) {
      setFavourites([...favourites, item]);
    }
  };
  const disLike = (id) => {
    setFavourites(favourites.filter((el) => el.id !== id));
  };
  const chooseBrand = (brand) => {
    setCurrentItems(product.filter((el) => el.brand === brand));
  };

  const searchItems = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };
  const searchClick = () => {
    setCurrentItems(
      product.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };
  return (
    <div className="wrapper">
      <Header
        favourites={favourites}
        onDelete={deleteOrder}
        deleteAll={deleteAll}
        orders={orders}
        items={currentItems}
        searchTerm={searchTerm}
        searchItems={searchItems}
        searchClick={searchClick}
        categories={categories}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              likeThis={likeThis}
              disLike={disLike}
              brands={brands}
              product={product}
              onAdd={addToOrder}
              currentItems={currentItems}
              setCurrentItems={setCurrentItems}
            />
          }
        />
        <Route
          path="/phones"
          element={
            <Categories
              likeThis={likeThis}
              disLike={disLike}
              favourites={favourites}
              product={product}
              onAdd={addToOrder}
          chooseBrand={chooseBrand}
              currentItems={currentItems.filter(
                (el) => el.category === "phones"
              )}
              category="Смартфоны"
              setCurrentItems={setCurrentItems}
              brands={brands}
            />
          }
        />
        <Route
          path="/laptops"
          element={
            <Categories
              likeThis={likeThis}
              disLike={disLike}
              favourites={favourites}
              product={product}
              onAdd={addToOrder}
          chooseBrand={chooseBrand}
              currentItems={currentItems.filter(
                (el) => el.category === "laptops"
              )}
              category="Ноутбуки"
              setCurrentItems={setCurrentItems}
              brands={brands}
            />
          }
        />
        <Route
          path="/watches"
          element={
            <Categories
              likeThis={likeThis}
              disLike={disLike}
              favourites={favourites}
              product={product}
              onAdd={addToOrder}
          chooseBrand={chooseBrand}
              currentItems={currentItems.filter(
                (el) => el.category === "watches"
              )}
              category="Смарт-часы"
              setCurrentItems={setCurrentItems}
              brands={brands}
            />
          }
        />
        <Route
          path="/accessories"
          element={
            <Categories
              likeThis={likeThis}
              disLike={disLike}
              favourites={favourites}
              product={product}
              onAdd={addToOrder}
          chooseBrand={chooseBrand}
              currentItems={currentItems.filter(
                (el) => el.category === "accessories"
              )}
              category="Аксессуары"
              setCurrentItems={setCurrentItems}
              brands={brands}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <Product
              likeThis={likeThis}
              disLike={disLike}
              items={currentItems}
              onAdd={addToOrder}
              favourites={favourites}
            />
          }
        />
        <Route
          path="samsung"
          element={
            <Samsung
              likeThis={likeThis}
              disLike={disLike}
              product={product}
              onAdd={addToOrder}
              brand="Samsung"
              currentItems={currentItems.filter((el) => el.brand === "samsung")}
            />
          }
        />
        <Route
          path="apple"
          element={
            <Samsung
              likeThis={likeThis}
              disLike={disLike}
              product={product}
              onAdd={addToOrder}
              brand="Apple"
              currentItems={currentItems.filter((el) => el.brand === "apple")}
            />
          }
        />
        <Route
          path="huawei"
          element={
            <Samsung
              likeThis={likeThis}
              disLike={disLike}
              product={product}
              onAdd={addToOrder}
              brand="Huawei"
              currentItems={currentItems.filter((el) => el.brand === "huawei")}
            />
          }
        /> 
        <Route
          path="mi"
          element={
            <Samsung
              likeThis={likeThis}
              disLike={disLike}
              product={product}
              onAdd={addToOrder}
              brand="Mi"
              currentItems={currentItems.filter((el) => el.brand === "mi")}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <Favourites
              favourites={favourites}
              likeThis={likeThis} //LIKE
              disLike={disLike} //Dislike
              product={product}
              onAdd={addToOrder}
            />
          }
        />
      </Routes>
      <Footer brands={brands} categories={categories} />
    </div>
  );
}
