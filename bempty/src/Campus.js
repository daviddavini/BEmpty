import React from 'react';
import './Campus.css';
import {useParams, Link} from "react-router-dom";

function Campus() {
  //let params = useParams();
  return (
    <div class="campus_panel">
        <div class="welcome">Welcome to the South Campus!</div>
        <div class="welcome">Search Buildings: </div>
        <div class="building">
            <a>Boelter Hall</a>
            <a>Empty classrooms: 53</a>
        </div>
        <div class="building">
            <a>Math Science Building</a>
            <a>Empty classrooms: 47</a>
        </div>
        <div class="building">
            <a>Engineering VI</a>
            <a>Empty classrooms: 13</a>
        </div>
    </div>
  )
}

export default Campus
