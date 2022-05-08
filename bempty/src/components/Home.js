import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
//import logo from './BEMPTY.png';


function Home() {

  return (
    <div class = "landing-page">
        <h1 class = "logo">Bempty</h1>
        <a class = "slogan">Be your best at an empty place. <br/></a>
        <div class="directory">
            <Link to="Campus/North" class="link1">North Campus</Link>
            <Link to="Campus/South" class="link1">South Campus</Link>
        </div>
    </div>
  )
}

export default Home
