import React from 'react';
import './Search.css';
import {Link, Outlet} from "react-router-dom";

function InputsArea() {
    return (
        <div class="inputs-area">
            Inputs
            {/* <Message/>
            <Preferences/> */}
        </div>
    );
}

function ResultsArea() {
    return <div class="results-area">Results</div>
    // return <BuildingsList/>
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
