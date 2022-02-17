import React, { useState } from "react";
import "./AllHorses.scss";
import { Link } from 'react-router-dom';
import HorseCard from "../HorseCard/HorseCard";
import Loading from "../Loading/Loading.js";
import NotFound from "../NotFound/NotFound";
import { fetchAllHorses } from '../graphqlQueries.js';
import { useQuery } from '@apollo/client';

function AllHorses() {
  const [allHorses, setAllHorses] = useState([])

    const { data, loading, error } = useQuery(fetchAllHorses, {
    onCompleted: data => {
      let currHorses = [...data.fetchHorses]
      setAllHorses(() => currHorses.sort((a, b) => a.stallNumber - b.stallNumber))
    }})

  return (
    <div className="horse-grid">
      {loading && <Loading />}
      {error && <NotFound />}
      {allHorses?.length > 0 && allHorses.map((horse) => {
        return <Link to={`/horses/${horse.id}`} key={horse.id}>
        <HorseCard 
          id={horse.id}
          name={horse.name}
          photo={horse.photo}
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