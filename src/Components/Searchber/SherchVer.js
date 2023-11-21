import { AiOutlineSearch } from "react-icons/ai"; 
import React from 'react'

function SherchVer() {
  return (
    <form className='search-ber'>
      <input type="text" placeholder='search' required/>
      <button type="submit"><AiOutlineSearch className="src-icon" /></button>
    </form>
  )
}

export default SherchVer
