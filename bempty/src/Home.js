import React from 'react';
import './Home.css';
import {BrowserRouter as useParams, Link} from "react-router-dom";
//import logo from './BEMPTY.png';

function Home() {

  return (
    <div class = "landing-page">
        <h1 class = "logo">BEMPTY</h1>
        <a class = "slogan">find your next study place <br/></a>
        <div class="directory">
            <Link to="Campus" class="link1">North Campus</Link>
            <Link to="Campus" class="link1">South Campus</Link>
        </div>
    </div>
  )
}

export default Home
