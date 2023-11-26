import React from 'react'

function RevewItems({items}) {
  console.log(items);
  const {img,category,company,newPrice,title}=items;
  return (
    <div>
      <div className="">
        <h4>{title}</h4>
        <div className="img-wrap">
        <img src={img} alt="" /> 
        </div>
        <div className="">
          <p>{category}</p>
          <p>{company}</p>
        </div>
        <h4>{newPrice}</h4>
      </div>
    </div>
  )
}

export default RevewItems
