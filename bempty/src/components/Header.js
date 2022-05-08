import React from 'react';
import "./Header.css";
import {Link, Outlet} from "react-router-dom";
import { FaSchool } from "react-icons/fa" // imports icon to webpage


function Header() {
  return (
    <div className="header">
        <Link to="/" class="header__logo"><FaSchool/>Bempty</Link>
        <Outlet/>
    </div>
  )
}

export default Header
