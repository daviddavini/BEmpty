import React from 'react';
import './BuildingsList.css'

function BuildingsList() {
    return (
        <div class="buildings-list">
            <ul>
                <li>
                    <div class="building">
                        <a>Engineering VI</a>
                        <a>Empty classrooms: 13</a>
                    </div>
                </li>
                <li>
                    <div class="building">
                        <a>Math Science Building</a>
                        <a>Empty classrooms: 47</a>
                    </div>
                </li>
                <li>
                    <div class="building">
                        <a>Boelter Hall</a>
                        <a>Empty classrooms: 53</a>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default BuildingsList;