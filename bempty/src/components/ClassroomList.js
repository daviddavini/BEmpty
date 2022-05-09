import React from 'react';
import './ClassroomList.css';
import { ReactDOM } from 'react';

function Classroom(props) {
    return <div class="classrooms" >
        <p>
            <label>Classroom : <b>{props.data.number}</b></label>
        </p>
        <p>
            <label> Level: <b>{props.data.Level}</b></label>
        </p>
        <p>
            <label> Building: <b>{props.data.Building}</b></label>
        </p>
        <p>
        <label> Availability: <b>{props.data.Availability}</b></label>
        </p>
    </div>;
  
  }

  function ClassroomList(props){


      const classList=props.classroomList;

      const listElements=classList.map((classroom)=>
                <Classroom key={classroom.Id} data={classroom}></Classroom>
      );
      return(
          <div>
              {listElements}
          </div>
      );
  }



//   const classrooms = [
//     {Id:5013,Level:'5',Building:'MS',Availability:'Empty'}, 
//     {Id:3125,Level:'3',Building:'Boleter',Availability:'Empty'},
//     {Id:175,Level:'1',Building:'Dodd',Availability:'Empty'}
  
//   ];

  //const element=<ClassroomList classList={classrooms}></ClassroomList>

  //ReactDOM.render(element,document.getElementById('root'));

  export default ClassroomList;