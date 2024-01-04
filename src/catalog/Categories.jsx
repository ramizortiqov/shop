import React from "react";
import Main from "../components/Main";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from "@material-ui/icons/Home";
import ArrowRight from "@material-ui/icons/ArrowRight";
import { Link } from "react-router-dom";
import Filter from "../components/filters/Filter";
export default function Categories({
  product,
  onAdd,
  currentItems,
  category,
  setCurrentItems,
  brands,
  likeThis,
  dislike,
  favourites,
  chooseBrand
}) {
  return (
    <>
      <Breadcrumbs separator={<ArrowRight />} aria-label="breadcrumb">
        <Link color="inherit" to="/">
          <HomeIcon />
        </Link>
        <Typography color="textPrimary">{category}</Typography>
      </Breadcrumbs>
      <div className="flex">
        <Filter
          brands={brands}
          setFilteredProducts={setCurrentItems}
          products={product}
          currentItems={currentItems}
          chooseBrand={chooseBrand}
        />
        <Main
          likeThis={likeThis}
          disLike={dislike}
          product={product}
          favourites={favourites}
          onAdd={onAdd}
          currentItems={currentItems}
        />
      </div>
    </>
  );
}
