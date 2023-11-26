import React from 'react'

function RevewItems({items}) {
  console.log(items);
  const {id,img,category,company,newPrice,color,title}=items;
  return (
    <div>
      <div className="">
        <h4>{title}</h4>
        <img src={img} alt="" /> 
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
