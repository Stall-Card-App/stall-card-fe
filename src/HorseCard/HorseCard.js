import React from "react";

function HorseCard({photo, name, stallNumber, amFeed, pmFeed, turnout}) {

  return ( 
    <div>
      <img src={`${photo}`} alt={`Photo of ${name}`} />
      <table>
        <tbody>
          <tr>
            <th>{name}</th>
            <td>{`Stall ${stallNumber}`}</td>
          </tr>
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