import React, { useState } from 'react';
import {useMutation, useQuery} from '@apollo/client';


function ContactFormlet({contactType, mutationQuery, queryName, resType, updateContactID}) {
  const formletOptions = {
    owner: {
      title: 'Owner'
    },
    vet: {
      title: 'Vet'
    },
    farrier: {
      title: 'Farrier'
    }
  }
  const [isNew, setIsNew] = useState(false);
  const [contact, setContact] = useState({name: '', phoneNumber: ''})
  const [options, setOptions] = useState([])

  const [mutationName] = useMutation(mutationQuery, {
    refetchQueries: [
      queryName
    ]
  });

  const createOption = (contact) => {
    return (
      <option key={contact.id} value={contact.id}>{contact.name}</option>
    )
  }

  const { data } = useQuery(queryName, {
    onCompleted: data => {
      setOptions(() => {
        return data[resType].map(contact => createOption(contact))
      })
    }})

  const handleSubmit = (e) => {
    e.preventDefault();
    mutationName({
      variables: {input: {params: contact}}
    });
    setContact({name: '', phoneNumber: ''});
    setOptions(() => [...options, ])
    setIsNew(false);
  }

  const handleContactChange = (e) => {
    e.preventDefault();
    const newInputs = {...contact};
      newInputs[e.target.id] = e.target.value;
    setContact(newInputs);
  }


  const handleSelectChange = (e) => {
    if (e.target.selectedOptions[0].dataset.isnew === 'true') {
      setIsNew(() => true);
    } else {
      updateContactID(e);
      setIsNew(() => false);
    }
  }

  return ( 
    <div className="input-container">
      <label htmlFor={`${contactType}Id`}>{formletOptions[contactType].title}</label>
      <select id={`${contactType}Id`}  onChange={(e) => handleSelectChange(e)} >
        <option disabled selected value> select an option </option>
        <option data-isnew={true}>New contact</option>
        {options}
      </select>
      {isNew && <div>
          <div className="input-container">
            <label htmlFor="name">Contact name</label>
            <input id="name" type="text" value={contact.name} onChange={(e) => handleContactChange(e)} />
          </div>
          <div className="input-container">
            <label htmlFor="phoneNumber">Contact phone</label>
            <input id="phoneNumber" type="text" value={contact.phoneNumber} onChange={(e) => handleContactChange(e)} />
          </div>
          <button onClick={(e) => handleSubmit(e)}>Save contact</button>
        </div>
      }
    </div>
   );
}

export default ContactFormlet;