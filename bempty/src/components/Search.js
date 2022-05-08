import React from 'react';
import './Search.css';
import BuildingsList from './BuildingsList';
import ClassroomList from './ClassroomList';
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

//function ClassroomsList() {
   // return (
   //     <div class="classrooms-list">
   //         Classrooms List
   //     </div>
  //  );
//}

function ResultsArea() {
    const classrooms = [
        {Id:5013,number:5013, Level:'5',Building:'MS',Availability:'Empty'}, 
        {Id:3125,number:3125,Level:'3',Building:'Boleter',Availability:'Empty'},
        {Id:175,number:175,Level:'1',Building:'Dodd',Availability:'Empty'}
      
    ];
    return (
        <div class="results-area">
            <Routes>
                <Route path="buildings" element={<BuildingsList/>} />
                <Route path="classrooms" element={<ClassroomList classroomList={classrooms}/>} />
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
