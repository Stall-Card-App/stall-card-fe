import React, { useState } from 'react';

function ContactFormlet({contactType, handleInputChange}) {
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

  const handleSelectChange = (e) => {
    console.log(e.target.selectedOptions[0].dataset)
    if (e.target.selectedOptions[0].dataset.isnew === 'true') {
      setIsNew(() => true)
    } else {
      handleInputChange(e)
      setIsNew(() => false)
    }
  }

  return ( 
    <div className="input-container">
      <label htmlFor="owner_id">{formletOptions[contactType].title}</label>
      <select id="owner_id" onChange={(e) => handleSelectChange(e)}>
        <option disabled selected value> select an option </option>
        <option data-isNew={true}>New contact</option>
        <option value="id here">Owner contact 1</option>
        <option value="another id here">contact name 2</option>
        <option value="id">contact name 3</option>
      </select>
      {isNew && <div>
          <div className="input-container">
            <label htmlFor={contactType + "_name"}>Contact name</label>
            <input id={contactType + "_name"} type="text" value={''} onChange={(e) => handleInputChange(e)} />
          </div>
          <div className="input-container">
            <label htmlFor={contactType + "_phone"}>Contact phone</label>
            <input id={contactType + "_phone"} type="text" value={''} onChange={(e) => handleInputChange(e)} />
          </div>
        </div>
      }
    </div>
   );
}

export default ContactFormlet;