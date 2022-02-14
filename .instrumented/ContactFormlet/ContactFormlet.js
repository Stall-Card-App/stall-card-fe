import React, { useState } from 'react';


function ContactFormlet({contacts, contactType, handleContactChange, contactData}) {
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

  const options = contacts.map(contact => {
    return (
      <option key={contact.id} value={contact.id}>{contact.name}</option>
    )
  })

  const handleSelectChange = (e) => {
    if (e.target.selectedOptions[0].dataset.isnew === 'true') {
      setIsNew(() => true)
    } else {
      handleContactChange(e)
      setIsNew(() => false)
    }
  }

  return ( 
    <div className="input-container">
      <label htmlFor={`${contactType}__${contactType}_id`}>{formletOptions[contactType].title}</label>
      <select id={`${contactType}__${contactType}_id`} onChange={(e) => handleSelectChange(e)} >
        <option disabled selected value> select an option </option>
        <option data-isnew={true}>New contact</option>
        {options}
      </select>
      {isNew && <div>
          <div className="input-container">
            <label htmlFor={contactType + "__name"}>Contact name</label>
            <input id={contactType + "__name"} type="text" value={contactData.name} onChange={(e) => handleContactChange(e)} />
          </div>
          <div className="input-container">
            <label htmlFor={contactType + "__telephone_number"}>Contact phone</label>
            <input id={contactType + "__telephone_number"} type="text" value={contactData.telephone_number} onChange={(e) => handleContactChange(e)} />
          </div>
        </div>
      }
    </div>
   );
}

export default ContactFormlet;