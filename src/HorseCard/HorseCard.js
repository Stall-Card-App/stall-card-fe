import React from "react";
import "./HorseCard.scss";

function HorseCard({photo, name, stallNumber, amFeed, pmFeed, turnout}) {

  return ( 
    <div className="horse-card">
      <p>{stallNumber}</p>
      <img src={photo} alt={`Photo of ${name}`} />
      <p>{name}</p>
      <table>
        <tbody className="horse-info">
          <tr>
            <th>AM Feed:</th>
            <td>{amFeed}</td>
          </tr>
          <tr>
            <th>PM Feed:</th>
            <td>{pmFeed}</td>
          </tr>
          <tr>
            <th>Turnout:</th>
            <td>{turnout}</td>
          </tr>
        </tbody>
      </table>
    </div>
   );
}

export default HorseCard;