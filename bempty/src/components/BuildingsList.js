import React from 'react';
import './BuildingsList.css'
import {Link} from "react-router-dom";

function BuildingsListEntry(props) {
    return (
        <div class="building">
            <Link to="/Search" onClick={() => props.select_building(props.name)}> {props.name}</Link>
            <a>Empty classrooms: {props.emptyRooms}</a>
        </div>
    );
}

function BuildingsList(props) {
    const buildings = [
        {
            name: "Engineering VI",
            emptyRooms: 13,
        },
        {
            name: "Math Science",
            emptyRooms: 47,
        },
        {
            name: "Boelter Hall",
            emptyRooms: 53,
        },
    ]

    return (
        <div class="buildings-list">
            <ul>
                {buildings.map((building) => 
                    <li>
                        <BuildingsListEntry name={building.name} emptyRooms={building.emptyRooms} 
                        select_building={props.select_building}/>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default BuildingsList;