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
          <td>{type}:</td>
          <td>{contact.name}</td>
        </tr>
        <tr>
          <td>Phone:</td>
          <td>{contact.phoneNumber}</td>
        </tr>
      </tbody>
    </table>
   );
}

export default ContactDetails;