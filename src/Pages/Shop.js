import React, { useEffect, useState } from 'react'
import Product from '../Components/Product/Product'
import Data from '../fakeData/db'
import { v4 as uuidv4 } from 'uuid';
import './Shop.css'

function Shop({getCount}) {
  const [products,setProducts] = useState(null);

  useEffect(()=>{
    const data = Data;
    setProducts(data);
  },[])

  return (
    <div className='productWrap'>
      {products && 
        products.map(product => <Product getCount={getCount} key={uuidv4()} product={product} id={uuidv4()} />)
      }
    </div>
  )
}

export default Shop
