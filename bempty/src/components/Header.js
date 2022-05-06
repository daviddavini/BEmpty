import React from 'react';
import "./Header.css";
import {Link, Outlet} from "react-router-dom";


function Header() {
  return (
    <div className="header">
        <Link to="/" class="header__logo">BEMPTY</Link>
        <Outlet/>
    </div>
  )
}

export default Header
