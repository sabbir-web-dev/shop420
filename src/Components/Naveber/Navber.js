import { AiOutlineClose } from "react-icons/ai"; 
import { BiMenuAltRight } from "react-icons/bi"; 

import { CgShoppingCart } from "react-icons/cg";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

function Navber({items}) {
  const [togle,setTogle] = useState(true);

  console.log(items)

  return (
    <nav className="container">
      <div className="nav-row">
        <Link to="/" className="link">
          <div className="logo">
            <h5>
              shop<span className="420">420</span>
            </h5>
          </div>
        </Link>
        <ul
         className={`nav-ul ${togle ? "togole" : ""}`}
        >
          <NavLink className="navlink" to="/"
           onClick={()=> setTogle(!togle)}
          >
            Shop
          </NavLink>

          <NavLink
            onClick={()=> setTogle(!togle)}
            className="navlink"
            to="/revew"
          >
            Revew
          </NavLink>

          <NavLink
            onClick={()=> setTogle(!togle)}
            className="navlink"
            to="/inventory"
          >
            Inventory
          </NavLink>

          <Link to="login-page" className="link login loginHide"
           onClick={()=> setTogle(!togle)}
          >
            Login
          </Link>
        </ul>
        <div className="nav-cp-box">
          <Link to="revew" className="link">
          <span className={items === 0 ? "not-after" : "shop-icon"}   item-update-before={items}>
            <CgShoppingCart className="shop"/>
            </span>
          </Link>

          <div className="menu-icon"
            onClick={()=> setTogle(!togle)}
          >
            {togle ? <BiMenuAltRight /> : <AiOutlineClose />}
          </div>

          <Link to="login-page" className="link login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navber;
