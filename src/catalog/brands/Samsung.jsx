// import { Breadcrumbs } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from "@material-ui/icons/Home";
import ArrowRight from "@material-ui/icons/ArrowRight";
import { Link } from "react-router-dom";
import Main from "../../components/Main";

export default function Samsung({
  product,
  onAdd,
  currentItems,
  brand,
  likeThis,
  disLike,
}) {
  return (
    <div>
      <Breadcrumbs separator={<ArrowRight />} aria-label="breadcrumb">
        <Link color="inherit" to="/">
          <HomeIcon />
        </Link>
        <Typography color="textPrimary">{brand}</Typography>
      </Breadcrumbs>
      <div className="main-items">
        {currentItems.length > 0 ? <Main
          likeThis={likeThis}
          disLike={disLike}
          product={product}
          onAdd={onAdd}
          currentItems={currentItems}
        />:
        <h1 style={{textAlign:'center'}}>Ничего нету</h1>
        }
      
      </div>
    </div>
  );
}
