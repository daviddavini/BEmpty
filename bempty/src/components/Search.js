import React, {useState} from 'react';
import './Search.css';
import BuildingsList from './BuildingsList';
import ClassroomList from './ClassroomList';
import {Link, Outlet} from "react-router-dom";
import InputsArea from './InputsArea.js'
import {Routes, Route, useParams} from "react-router-dom";


function ResultsArea(props) {
    const classrooms = [
        {Id:5013,number:5013, Level:'5',Building:'MS',Availability:'Empty'}, 
        {Id:3125,number:3125,Level:'3',Building:'Boleter',Availability:'Empty'},
        {Id:175,number:175,Level:'1',Building:'Dodd',Availability:'Empty'}
      
    ];

    return (
        <div class="results-area">
            <Routes>
                <Route path="buildings" element={<BuildingsList building={props.building} select_building={props.select_building}/>} />
                <Route index element={<ClassroomList classroomList={classrooms}/>} />
            </Routes>
        </div>
    );
}



function Search() {
  // time and date 
  const [time, onChange_time] = useState('10:00');
  const [date, onChange_date] = useState(new Date());
  const [building, select_building] = useState('Default')


  return (
    <div class="search">
        <InputsArea class="inputs-area" 
            time={time} onChange_time={onChange_time} 
            date={date} onChange_date={onChange_date}
            building={building} select_building={select_building}/>
        <ResultsArea building={building} select_building={select_building}/>
        <Outlet/>
    </div>
  )
}

export default Search
