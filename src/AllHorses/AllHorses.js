import React, { useState } from "react";
import "./AllHorses.scss";
import { Link } from 'react-router-dom';
import mockData from "../mockData";
import HorseCard from "../HorseCard/HorseCard";
import { fetchAllHorses } from '../graphqlQueries.js';
import { useQuery } from '@apollo/client';

function AllHorses() {
  const [allHorses, setAllHorses] = useState([])

  const { data } = useQuery(fetchAllHorses, {
    onCompleted: data => {
      setAllHorses(() => data.fetchHorses)
    }})

  return (
    <div className="horse-grid">
      {allHorses?.length > 0 && allHorses.map((horse) => {
        return <Link to={`/horses/${horse.id}`} key={horse.id}>
        <HorseCard 
          id={horse.id}
          photo={mockData.data.horses[1].photo}
          name={horse.name}
          stallNumber={horse.stallNumber}
          amFeed = {horse.amFeed}
          pmFeed = {horse.pmFeed}
          turnout = {horse.turnout}
        />
      </Link>
      })
      }
    </div>
    )
}

export default AllHorses;