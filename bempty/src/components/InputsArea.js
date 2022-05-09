import React, {useState} from 'react'
import "./InputsArea.css"
import TimePicker from 'react-time-picker';
import DatePicker from 'react-date-picker';
//import "react-datepicker/dist/react-datepicker.css";

export default function InputsArea() {
  const [time, onChange_time] = useState('10:00');
  const [date, onChange_date] = useState(new Date());

  return (
    <div class="inputs-area">
      <DatePicker onChange={onChange_date} value={date} />
      <TimePicker onChange={onChange_time} value={time} clockIcon={null} clearIcon={null}/>
      <div>The time you selected is {time}. </div>
    </div>
  )
}
