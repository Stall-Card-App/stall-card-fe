import './ContactDetails.scss';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

function ContactDetails({query, id, resName, type}) {
  const [contact, setContact] = useState('')

  useQuery(query, {
    variables: { id: id },
    onCompleted: data => {
      setContact(() => data[resName])
    }
  })

  return contact && ( 
    <table>
      <tbody>
        <tr>
          <th>{type}:</th>
          <td>{contact.name}</td>
        </tr>
        <tr>
          <th>Phone:</th>
          <td>{contact.phoneNumber}</td>
        </tr>
      </tbody>
    </table>
   );
}

export default ContactDetails;