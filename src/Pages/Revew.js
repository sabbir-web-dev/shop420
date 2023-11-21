import React, { useEffect, useState } from 'react'

function Revew({items}) {
  const [product,setProduct] = useState("");

  useEffect(()=>{
    console.log(items)
  })
  
  return (
    <div>
      {
        items && items.map(revewItem => <h2>HI</h2>)
      }
    </div>
  )
}

export default Revew
