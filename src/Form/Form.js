import './Form.scss';
import MicroModal from 'micromodal';
import { useState } from 'react';
import ContactFormlet from '../ContactFormlet/ContactFormlet';
import mockData from "../mockData";
import { addHorseQuery, addFarrierQuery, addOwnerQuery, addVetQuery, fetchAllFarriers, fetchAllVets, fetchAllOwners } from '../graphqlQueries.js';
import { useMutation } from '@apollo/client';

const initialInputsState = {
  name: '',
  stallNumber: 0,
  age: 0,
  breed: '',
  sex: '',
  color: '',
  markings: '',
  notes: '',
  amFeed: '',
  pmFeed: '',
  supplements: '',
  turnout: '',
  blanketingTemp: 0,
  owner: {
    ownerId: 0,
    name: '',
    phoneNumber: ''
  },
  vet: {
    vetId: 0,
    name: '',
    phoneNumber: ''
  },
  farrier: {
    farrierId: 0,
    name: '',
    phoneNumber: ''
  },
  barnId: 2
}

function Form({currentHorse}) {
  const [inputs, setInputs] = useState(initialInputsState);
  const [formPage, setFormPage] = useState(1);

  const [addHorse] = useMutation(addHorseQuery);
  const [addVet, {data}] = useMutation(addVetQuery);
  const [addFarrier] = useMutation(addFarrierQuery);
  const [addOwner] = useMutation(addOwnerQuery);

  const handleInputChange = (e) => {
    e.preventDefault();
    const newInputs = {...inputs};
    if (e.target.type === 'number') {
      newInputs[e.target.id] = Number(e.target.value);
    } else {
      newInputs[e.target.id] = e.target.value;
    }
    setInputs(newInputs);
  }

  const handleContactChange = (e) => {
    e.preventDefault();
    const contactType = e.target.id.split('__')[0];
    const contactField = e.target.id.split('__')[1];
    const newInputs = {...inputs};
    newInputs[contactType][contactField] = e.target.value;
    setInputs(newInputs);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newInputs = {...inputs};
    newInputs.vetId = Number(newInputs.vet.vet_id);
    newInputs.farrierId = Number(newInputs.farrier.farrier_id);
    newInputs.ownerId = Number(newInputs.owner.owner_id);

    if (newInputs.vet.name && newInputs.vet.phone) {
      const newVet = {
        name: newInputs.vet.name,
        phoneNumber: newInputs.vet.phoneNumber
      }
      addVet(newVet)
      console.log('stuff', data)
      // newInputs.vetId = Number(data..id)
    }

    delete newInputs.owner;
    delete newInputs.farrier;
    delete newInputs.vet;

    addHorse({
      variables: {input: {params: newInputs}}
    })

    setInputs(initialInputsState)
    MicroModal.close('modal-1')
    setFormPage(() => 1)
  }

  const handleNext = (e) => {
    e.preventDefault();
    setFormPage(() => formPage + 1);
  }

  const handleBack = (e) => {
    e.preventDefault();
    setFormPage(() => formPage - 1);
  }

  MicroModal.init();
  return ( 
    <div className='modal' id="modal-1" aria-hidden="true">
      <div tabIndex="-1" data-micromodal-close>
        {formPage === 1 && <div className='modal-content' role="dialog" aria-modal="true" aria-labelledby="modal-1-title" >
          <header className='modal-header'>
            <h2 id="modal-1-title">
              Horse Info
            </h2>
            <button className='modal-exit' aria-label="Close modal" data-micromodal-close>x</button>
          </header>
          <div id="modal-1-content">
            <form>
              <div className="input-container">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={inputs.name} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="input-container">
                <label htmlFor="stallNumber">Stall Number</label>
                <input id="stallNumber" type="number" value={inputs.stallNumber} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="input-container">
                <label htmlFor="age">Age</label>
                <input id="age" type="number" value={inputs.age} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="input-container">
                <label htmlFor="breed">Breed</label>
                <input id="breed" type="text" value={inputs.breed} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="input-container">
                <label htmlFor="sex">Sex</label>
                <input id="sex" type="text" value={inputs.sex} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="input-container">
                <label htmlFor="color">Color</label>
                <input id="color" type="text" value={inputs.color} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="input-container">
                <label htmlFor="markings">Markings</label>
                <input id="markings" type="text" value={inputs.markings} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="input-container">
                <label htmlFor="notes">Notes</label>
                <input id="notes" type="text" value={inputs.notes} onChange={(e) => handleInputChange(e)} />
              </div>
              <button className='next-button' onClick={(e) => handleNext(e)}>Next</button>
            </form>
          </div>
        </div>}
        {formPage === 2 && <div className='modal-content' role="dialog" aria-modal="true" aria-labelledby="modal-1-title" >
          <header className='modal-header'>
            <h2 id="modal-1-title">
              Care Info
            </h2>
            <button className='modal-exit' aria-label="Close modal" data-micromodal-close>x</button>
          </header>
          <div id="modal-1-content">
            <form>
              <div className="input-container">
                <label htmlFor="amFeed">AM Feed</label>
                <input id="amFeed" type="text" value={inputs.amFeed} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="input-container">
                <label htmlFor="pmFeed">PM Feed</label>
                <input id="pmFeed" type="text" value={inputs.pmFeed} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="input-container">
                <label htmlFor="supplements">supplements</label>
                <input id="supplements" type="text" value={inputs.supplements} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="input-container">
                <label htmlFor="turnout">Turnout</label>
                <input id="turnout" type="text" value={inputs.turnout} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="input-container">
                <label htmlFor="blanketingTemp">Blanketing Temp</label>
                <input id="blanketingTemp" type="number" value={inputs.blanketingTemp} onChange={(e) => handleInputChange(e)} />
              </div>
              <button className='back-button' onClick={(e) => handleBack(e)}>Back</button>
              <button className='next-button' onClick={(e) => handleNext(e)}>Next</button>
            </form>
          </div>
        </div>
        }
        {formPage === 3 &&         <div className='modal-content' role="dialog" aria-modal="true" aria-labelledby="modal-1-title" >
          <header className='modal-header'>
            <h2 id="modal-1-title">
              Contact Info
            </h2>
            <button className='modal-exit' aria-label="Close modal" data-micromodal-close>x</button>
          </header>
          <div id="modal-1-content">
            <form>
            <ContactFormlet 
              contacts={mockData.data.owners} 
              contactType={"owner"} 
              handleContactChange={handleContactChange} 
              contactData={initialInputsState.owner}
              mutation={addOwner}
              queryName={fetchAllOwners}
              resType="fetchOwners" />
            <ContactFormlet 
              contacts={mockData.data.farriers} 
              contactType={"farrier"} 
              handleContactChange={handleContactChange} 
              contactData={initialInputsState.farrier}
              mutation={addFarrier}
              queryName={fetchAllFarriers}
              resType="fetchFarriers" />
            <ContactFormlet 
              contacts={mockData.data.vets} 
              contactType={"vet"} 
              handleContactChange={handleContactChange} 
              contactData={initialInputsState.vet}
              mutationName={addVet}
              mutationQuery={addVetQuery}
              queryName={fetchAllVets}
              resType="fetchVets"
               />
              <button className='back-button' onClick={(e) => handleBack(e)}>Back</button>
              <button className='submit-button' onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
          </div>
        </div>}
      </div>
    </div>
   );
}

export default Form;