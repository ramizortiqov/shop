import React from "react";
import { product } from "../data";
import Item from "./Item";

export default function Items({ items, onAdd,likeThis,favourites,
  disLike}) {
  return (
    <main>
      {items && items.map((el) => (
        <Item
          key={el.id}
          item={el}
          onAdd={onAdd}
          items ={items}
          product = {product}
          likeThis={likeThis} 
disLike={disLike}
favourites ={favourites}

        />
      ))}
    </main>
  );
}

// import React, { Component } from 'react'
// import Item from './Item'

// export class Items extends Component {
//   render() {
//     return (
//       <main>
//         {this.props.items.map(el=>(
//            <Item onShowItem = {this.props.onShowItem} key = {el.id} item={el} onAdd={this.props.onAdd}/>
//         ))}
//       </main>
//     )
//   }
// }

// export default Items
