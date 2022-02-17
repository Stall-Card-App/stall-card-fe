import React, { useState } from "react";
import "./AllHorses.scss";
import { Link } from 'react-router-dom';
import HorseCard from "../HorseCard/HorseCard";
import Loading from "../Loading/Loading.js";
import NotFound from "../NotFound/NotFound";
import { fetchAllHorses } from '../graphqlQueries.js';
import { useQuery } from '@apollo/client';
import MicroModal from 'micromodal';
import Form from "../Form/Form";

function AllHorses( { updateCurrentPage }) {
  MicroModal.init();
  const [allHorses, setAllHorses] = useState([])

    const { data, loading, error } = useQuery(fetchAllHorses, {
    onCompleted: data => {
      let currHorses = [...data.fetchHorses]
      setAllHorses(() => currHorses.sort((a, b) => a.stallNumber - b.stallNumber))
    }})

  return (
    <div className="horse-grid">
      <Form />
      {loading && <Loading />}
      {error && <NotFound />}
      {allHorses?.length > 0 && allHorses.map((horse) => {
        return <HorseCard 
          id={horse.id}
          name={horse.name}
          photo={horse.photo}
          stallNumber={horse.stallNumber}
          amFeed = {horse.amFeed}
          pmFeed = {horse.pmFeed}
          turnout = {horse.turnout}
          updateCurrentPage={updateCurrentPage}
        />
      })
      }
      <button className='new-horse-button' onClick={() => MicroModal.show('modal-1')}>
        <i className="fas fa-plus"></i> Add Horse
      </button>
    </div>
  )
}

export default AllHorses;