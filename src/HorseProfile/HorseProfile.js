import React from "react";
import { useParams, Link } from "react-router-dom";
import mockData from "../mockData";
import "./HorseProfile.scss";

function HorseProfile() {
  const horseId = Number(useParams().id);
  let horse;

  mockData.data.horses.forEach((singleHorse) => {
    if (singleHorse.id === horseId) {
      horse = singleHorse;
    }
  })

  const owner = mockData.data.owners.find((oneOwner) => {
    return horse.owner_id === oneOwner.id;
  })

  const vet = mockData.data.vets.find((oneVet) => {
    return horse.vet_id === oneVet.id;
  })

  const farrier = mockData.data.farriers.find((oneFarrier) => {
    return horse.farrier_id === oneFarrier.id;
  })

  return ( 
    <div className="horse-profile">
    <section className="profile-container">
      <img className="photo" src={`${horse.photo}`} alt={`Photo of ${horse.name}`} />
      <h2>{horse.name}</h2>
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
    </section>
      <div className="all-contacts">
        <h3>Important Contacts:</h3>
          <span className="contact"><h4>Owner: {owner.name}</h4><p>Phone: {owner.phone_number}</p></span>
          <span className="contact"><h4>Vet: {vet.name}</h4><p>Phone: {vet.phone_number}</p></span>
          <span className="contact"><h4>Farrier: {farrier.name}</h4><p>Phone: {owner.phone_number}</p></span>
      </div>
      <Link to={"/horses"}>⬅ Return to All Horses</Link>
    </div>
    
   );
}

export default HorseProfile;