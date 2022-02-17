import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./HorseProfile.scss";
import { fetchHorse, fetchVet, fetchFarrier, fetchOwner, destroyHorseQuery, fetchAllHorses } from '../graphqlQueries.js'
import { useQuery, useMutation } from '@apollo/client';
import ContactDetails from "../ContactDetails/ContactDetails";
import Form from "../Form/Form";
import Loading from "../Loading/Loading";
import MicroModal from 'micromodal';

function HorseProfile( { updateCurrentPage }) {
  MicroModal.init();
  const [horse, setHorse] = useState('')
  const [contacts, setContacts] = useState({
    farrier: undefined,
    vet: undefined,
    owner: undefined,
  })

  const horseId = Number(useParams().id);
  const navigate = useNavigate();

  const {loading, error} = useQuery(fetchHorse, {
    variables: { id: horseId },
    onCompleted: data => {
      setHorse(() => data.fetchHorse);
    }
  })

  const [destroyHorse] = useMutation(destroyHorseQuery, {
    refetchQueries: [
      fetchAllHorses, 
      'fetchHorses' 
    ],
  });

  const removeHorse = () => {
    if (window.confirm('Are you sure you want to delete this horse?') === true) {
      destroyHorse({
        variables: {input: {id: Number(horseId)}}
      })
      navigate('/horses')
    }
  }

  useQuery(fetchFarrier, {
    variables: { id: horse.farrierId },
    onCompleted: data => {
      const newContacts = {...contacts};
      newContacts.farrier = data.fetchFarrier
      setContacts(() => newContacts)
    }
  })
  
  useQuery(fetchOwner, {
    variables: { id: horse.ownerId },
    onCompleted: data => {
      const newContacts = {...contacts};
      newContacts.owner = data.fetchOwner
      setContacts(() => newContacts)
    }
  })

  return ( 
    <section className="details-page">
      {loading && <Loading />}
      <Link to={"/horses"} className="back-button" onClick={() => updateCurrentPage('All Horses')}><i class="fas fa-chevron-left"></i> Return to All Horses</Link>
      {horse && <div className="horse-profile">
      <Form currentHorse={horse}/>
      <button className='edit-horse-button' onClick={() => MicroModal.show('modal-1')}>
        <i class="fas fa-pencil-alt"></i>
      </button>
      <button className='destroy-button' onClick={() => removeHorse() }>
        <i className="fas fa-trash"></i>
      </button>
        <img className="horse-photo" src={`${horse.photo}`} alt={`Photo of ${horse.name}`} />
        <section className="horse-details">
          <h3>{horse.name}</h3>
          <div className="info-tables">
            <table>
              <tr>
                <td>Stall:</td>
                <td>{horse.stallNumber}</td>
              </tr>
              <tr>
                <td>Breed:</td>
                <td>{horse.breed}</td>
              </tr>
              <tr>
                <td>Sex:</td>
                <td>{horse.sex}</td>
              </tr>
              <tr>
                <td>Age:</td>
                <td>{horse.age}</td>
              </tr>
              <tr>
                <td>Color:</td>
                <td>{horse.color}</td>
              </tr>
              <tr>
                <td>Markings:</td>
                <td>{horse.markings}</td>
              </tr>
              <tr>
                <td>AM Feed:</td>
                <td>{horse.amFeed}</td>
              </tr>
              <tr>
                <td>PM Feed:</td>
                <td>{horse.pmFeed}</td>
              </tr>
              <tr>
                <td>Supplements:</td>
                <td>{horse.supplements}</td>
              </tr>
              <tr>
                <td>Turnout:</td>
                <td>{horse.turnout}</td>
              </tr>
              <tr>
                <td>Blanketing Temperature:</td>
                <td>{horse.blanketingTemp}</td>
              </tr>
            </table>
          <div className="all-contacts">
            <h3>Important Contacts:</h3>
                <ContactDetails query={fetchOwner} id={horse.ownerId} resName={'fetchOwner'} type="Owner" />
                <ContactDetails query={fetchVet} id={horse.vetId} resName={'fetchVet'} type="Vet" />
                <ContactDetails query={fetchFarrier} id={horse.farrierId} resName={'fetchFarrier'} type="Farrier" />
              </div>
            </div>
        </section>
      </div>}
    </section>
   );
}

export default HorseProfile;