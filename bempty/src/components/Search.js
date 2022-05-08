import React from 'react';
import './Search.css';
import BuildingsList from './BuildingsList.js';
import {Link, Outlet} from "react-router-dom";
import InputsArea from './InputsArea.js'
import {Routes, Route, useParams} from "react-router-dom";

// function InputsArea() {
//     return (
//         <div class="inputs-area">
//             Inputs
//             {/* <Message/>
//             <Preferences/> */}
//         </div>
//     );
// }

function ClassroomsList() {
    return (
        <div class="classrooms-list">
            Classrooms List
        </div>
    );
}

function ResultsArea() {
    return (
        <div class="results-area">
            <Routes>
                <Route path="buildings" element={<BuildingsList/>} />
                <Route path="classrooms" element={<ClassroomsList/>} />
            </Routes>
        </div>
    );
}

function Search() {

  return (
    <div class="search">
        <InputsArea/>
        <ResultsArea/>
        <Outlet/>
    </div>
  )
}

export default Search
