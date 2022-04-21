import React from 'react';
import './Home.css';
//import logo from './BEMPTY.png';

function Home() {
  return (
    <div class = "landing-page">
        <h1 class = "logo">BEMPTY</h1>
        <a class = "slogan">find your next study place <br/></a>
        <div class="directory">
            <button class="button1">North Campus</button>
            <button class="button1">South Campus</button>
        </div>
    </div>
  )
}

export default Home
