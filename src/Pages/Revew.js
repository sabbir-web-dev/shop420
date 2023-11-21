import React, { useEffect,  } from 'react'

function Revew({items}) {

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
