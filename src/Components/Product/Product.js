import { MdOutlineAddShoppingCart } from "react-icons/md";
import React from "react";
import "./Product.css";

function Product({ product, id,getCount }) {
  const { color, category, company, img, newPrice, prevPrice, star, title } =
    product;

  const hendleClick = () => {
    console.log("hi")
    const selectProdunt = {
      id: id,
      img:img,
      newPricr:newPrice,
      prevPrice:prevPrice,
      star:star,
      title:title,
      color:color,
      category: category,
      company:company
    }
    getCount(selectProdunt)
  };
  return (
    <div className="product">
      <div className="img-wrap">
        <img src={img} alt="Product" />
      </div>
      <h4>{title}</h4>
      <p>
        Price: <span>${newPrice}</span>
      </p>
      <div className="btn-wrap">
        <button onClick={hendleClick} className="btn">
          <MdOutlineAddShoppingCart />
          Add to card
        </button>
      </div>
    </div>
  );
}

export default Product;
