import React from "react";
import { FaCartArrowDown, FaHeart, FaRegHeart } from "react-icons/fa";
import { Link, NavLink, useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from "@material-ui/icons/Home";
import ArrowRight from "@material-ui/icons/ArrowRight";
import Rating from "./Rating";

export default function Product({
  items,
  onAdd,
  likeThis,
  disLike,
  favourites,
}) {
  const { id } = useParams();
  const tovar = items.find((tovar) => tovar.id === parseInt(id));
  return (
    <>
      <Breadcrumbs separator={<ArrowRight />} aria-label="breadcrumb">
        <NavLink color="inherit" to="/">
          <HomeIcon />
        </NavLink>
        <NavLink color="inherit" to={`/${tovar.category}`}>
          {tovar.category === "phones"
            ? "Смартфоны"
            : tovar.category === "laptops"
            ? "Ноутбуки"
            : "Смарт-часы"}
        </NavLink>
        <Typography color="textPrimary">{tovar.title}</Typography>
      </Breadcrumbs>
      <main className="main">
        <div className="tovar">
          <h1 className="tovar-title">{tovar.title}</h1>
          <div className="tovar-flex">
            <div className="tovar-img">
              <img src={"..//img/" + tovar.src} alt={tovar.title} />
            </div>
            <div className="charac">
              <div>
                <b className="tovar-price">{tovar.price}$</b>
                <span
                  style={{
                    float: "right",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span>
                    Бренд:
                    <b className="tovar-brand">
                      <Link to={`/${tovar.brand}`}>{tovar.brand}</Link>
                    </b>
                  </span>
                  <span>Артикул: {tovar.id}</span>
                </span>
              </div>
              <div className="tovar-column">
                <span className="">
                  Диагональ (дюйм): <b>{tovar.display}</b>
                </span>
                <span className="">
                  Разрешение (пикс): <b>{tovar.razreshenie}</b>
                </span>
                <span className="">
                  Встроенная память (ГБ): <b>{tovar.localStorage}</b>
                </span>
                <span className="">
                  Фотокамера (МП): <b>{tovar.camera}</b>
                </span>
                <span className="">
                  Процессор: <b>{tovar.processor}</b>
                </span>
                <br />
                <Rating rate={tovar.rate} sizing={30} />
              </div>
              <div className="product-btn">
                <button className="tovar-button" onClick={() => onAdd(tovar)}>
                  <FaCartArrowDown /> Купить
                </button>
                <span
                  onClick={() =>
                    favourites.find((el) => el.id === tovar.id)
                      ? disLike(tovar.id)
                      : likeThis(tovar)
                  }
                >
                  {favourites.find((el) => el.id === tovar.id) ? (
                    <FaHeart size={30} color="red" />
                  ) : (
                    <FaRegHeart size={30} />
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
