import React from 'react'
import RevewItems from '../Components/RevewItems/RevewItems'


function Revew({items}) {

  return (
    <div>
      {
        items && items.map(revewItem => <RevewItems key={RevewItems.id} items={revewItem} />)
      }
    </div>
  )
}

export default Revew
