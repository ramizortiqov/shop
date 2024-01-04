import React from 'react'
import {FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Order({item,  onDelete}){   
    return (
      <div className='item'>
       <Link to={`/product/${item.id}`}> <img alt={item.title} src={"..//img/" + item.src}/></Link>
        <h2>{item.title}</h2>
        <b>{item.price}$</b>
        <FaTrash className='delete-icon' onClick={()=>onDelete(item.id)}/>
      </div>
    )
  }

