import React, {useState} from 'react'
import "./InputsArea.css"
import TimePicker from 'react-time-picker';
import DatePicker from 'react-date-picker';
import {Link, Outlet} from "react-router-dom";


export default function InputsArea(props) {
  let selected_date = `${props.date.getMonth()+1}/${props.date.getDate()}/${props.date.getFullYear()}`;


  return (
    <div class="control-panel">
      <DatePicker onChange={props.onChange_date} value={props.date} />
      <TimePicker onChange={props.nChange_time} value={props.time} clockIcon={null} clearIcon={null}/>
      <div>The time you selected is {props.time}. </div>
      <div>The date you selected is {selected_date}</div>
      <div>The building you selected is {props.building}</div>
      <button class="button1" onClick={() => props.select_building('Default')}>Reset building</button>
      <Link to="buildings" class="button1">Find building</Link>
    </div>
  )
}
