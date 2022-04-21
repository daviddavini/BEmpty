import React from 'react';
import "./Header.css";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";


function Header() {
  return (
    <div className="header">
        <Link to="/" class="header__logo">BEMPTY</Link>
        
        {/*<div className='header__search'>
            <input className='header__searchInput' type="text"></input>
        </div>*/}

    </div>
  )
}

export default Header
