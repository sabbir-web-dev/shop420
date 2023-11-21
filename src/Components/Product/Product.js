import { MdOutlineAddShoppingCart } from "react-icons/md"; 
import React from 'react'
import './Product.css'

function Product({product,id}) {
  const {color,category,company,img,newPrice,prevPrice,star,title} =product
  return (
    <div className='product'>
      <div className="img-wrap">
      <img src={img} alt="Product" />
      </div>
      <h4>{title}</h4>
       <p>Price: <span>${newPrice}</span></p>
      <div className="btn-wrap">
      <button className='btn'><MdOutlineAddShoppingCart />Add to card</button>
      </div>
    </div>
  )
}

export default Product
