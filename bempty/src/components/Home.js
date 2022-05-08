import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
//import logo from './BEMPTY.png';


function Home() {

  return (
    <div class = "landing-page">
      <div class ="left-content">
        <h1 class = "logo">Welcome!</h1>
        <a class = "slogan">Be your best at an empty place. <br/></a>
            <Link to="Campus/North" class="link1">  <button class ="main-btn">Search for Empty Classrooms</button></Link>
            </div>
            {/* <Link to="Campus/South" class="link1">South Campus</Link> */}
            <div class ="right-content">
              <div class ="image" >
            <img src={"https://s3.amazonaws.com/cms.ipressroom.com/173/files/20198/5d72b4772cfac209ff04c634_Royce+Quad/Royce+Quad_hero.jpg"}/>
            </div>
            </div>
        </div>
  )
}

export default Home
