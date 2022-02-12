import React from "react";
import "./AllHorses.scss";
import { Link } from 'react-router-dom';
import mockData from "../mockData";
import HorseCard from "../HorseCard/HorseCard";

function AllHorses() {
  const allHorses = mockData.data.horses;

  const horses = allHorses.map((horse) => {
    return (
      <Link to={`/horses/${horse.id}`} key={horse.id}>
        <HorseCard 
          id={horse.id}
          photo={horse.photo}
          name={horse.name}
          stallNumber={horse.stall_number}
          amFeed = {horse.am_feed}
          pmFeed = {horse.pm_feed}
          turnout = {horse.turnout}
        />
      </Link>
    )
  })

  return ( 
    <div className="horse-grid">
      {horses}
    </div>
   );
}

export default AllHorses;