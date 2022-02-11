import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import mockData from "../mockData";
import "./HorseProfile.scss";
import { fetchHorse, fetchVet, fetchFarrier, fetchOwner } from '../graphqlQueries.js'
import { useQuery } from '@apollo/client';
import ContactDetails from "../ContactDetails/ContactDetails";

function HorseProfile() {
  const [horse, setHorse] = useState('')
  const [contacts, setContacts] = useState({
    farrier: undefined,
    vet: undefined,
    owner: undefined,
  })
  const horseId = Number(useParams().id);

  useQuery(fetchHorse, {
    variables: { id: horseId },
    onCompleted: data => {
      setHorse(() => data.fetchHorse);

    }
  })


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
      {horse && <div className="horse-profile">
        <img className="horse-photo" src={`${mockData.data.horses[1].photo}`} alt={`Photo of ${horse.name}`} />
        <section className="horse-details">
          <h2>{horse.name}</h2>
          <div className="info-tables">
          <table>
            <tbody>
              <tr>
                <th>Stall:</th>
                <td>{horse.stall_number}</td>
              </tr>
              <tr>
                <th>Breed:</th>
                <td>{horse.breed}</td>
              </tr>
              <tr>
                <th>Sex:</th>
                <td>{horse.sex}</td>
              </tr>
              <tr>
                <th>Age:</th>
                <td>{horse.age}</td>
              </tr>
              <tr>
                <th>Color:</th>
                <td>{horse.color}</td>
              </tr>
              <tr>
                <th>Markings:</th>
                <td>{horse.markings}</td>
              </tr>
              <tr>
                <th>AM Feed:</th>
                <td>{horse.am_feed}</td>
              </tr>
              <tr>
                <th>PM Feed:</th>
                <td>{horse.pm_feed}</td>
              </tr>
              <tr>
                <th>Supplements:</th>
                <td>{horse.supplements}</td>
              </tr>
              <tr>
                <th>Turnout:</th>
                <td>{horse.turnout}</td>
              </tr>
              <tr>
                <th>Blanketing Temperature:</th>
                <td>{horse.blanketing_temp}</td>
              </tr>
            </tbody>
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
      <Link to={"/horses"} className="back-button">⬅ Return to All Horses</Link>
    </section>
   );
}

export default HorseProfile;