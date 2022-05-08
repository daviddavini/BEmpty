import React from 'react';
import './BuildingsList.css'

function BuildingsListEntry(props) {
    return (
        <div class="building">
            <a>{props.name}</a>
            <a>Empty classrooms: {props.emptyRooms}</a>
        </div>
    );
}

function BuildingsList() {
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
            <h1>Buildings:</h1>
            <ul>
                {buildings.map((building) => 
                    <li><BuildingsListEntry name={building.name} emptyRooms={building.emptyRooms}/></li>
                )}
            </ul>
        </div>
    );
}

export default BuildingsList;