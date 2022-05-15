import React, {useState} from 'react'
import "./InputsArea.css"
import TimePicker from 'react-time-picker';
import DatePicker from 'react-date-picker';
import {Link, Outlet} from "react-router-dom";
//import "react-datepicker/dist/react-datepicker.css";

export default function InputsArea(props) {
  //const [time, onChange_time] = useState('10:00');
  //const [date, onChange_date] = useState(new Date());
  let selected_date = `${props.date.getMonth()+1}/${props.date.getDate()}/${props.date.getFullYear()}`;


  return (
    <div class="control-panel">
      <DatePicker onChange={props.onChange_date} value={props.date} />
      <TimePicker onChange={props.nChange_time} value={props.time} clockIcon={null} clearIcon={null}/>
      <div>The time you selected is {props.time}. </div>
      <div>The date you selected is {selected_date}</div>
      <Link to="/Search" class="button1">Find Classrooms</Link>
      <Link to="buildings" class="button1">Find building</Link>
    </div>
  )
}
