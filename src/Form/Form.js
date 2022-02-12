import './Form.scss';
import MicroModal from 'micromodal';
import { useState } from 'react';
import ContactFormlet from '../ContactFormlet/ContactFormlet';
import mockData from "../mockData";
import { addHorseQuery, addFarrierQuery, addOwnerQuery, addVetQuery, fetchAllFarriers, fetchAllVets, fetchAllOwners } from '../graphqlQueries.js';
import { useMutation } from '@apollo/client';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

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
              Add Horse Info
            </h2>
            <button className='modal-exit' aria-label="Close modal" data-micromodal-close>x</button>
          </header>
          <div id="modal-1-content">
            <form>
              <div className="input-container">
                <TextField
                  label="Name"
                  id="name"
                  value={inputs.name}
                  onChange={(e) => handleInputChange(e)}
                  size="small"
                />
              </div>
              <div className="input-container">
                <TextField
                  label="Stall #"
                  id="stallNumber"
                  value={inputs.stallNumber}
                  onChange={(e) => handleInputChange(e)}
                  size="small"
                />
              </div>
              <div className="input-container">
                <TextField
                    label="Age"
                    id="age"
                    value={inputs.age}
                    onChange={(e) => handleInputChange(e)}
                    size="small"
                />
              </div>
              <div className="input-container">
                <TextField
                  label="Breed"
                  id="breed"
                  value={inputs.breed}
                  onChange={(e) => handleInputChange(e)}
                  size="small"
                />
              </div>
              <div className="input-container">
                <TextField
                  label="Sex"
                  id="sex"
                  value={inputs.sex}
                  onChange={(e) => handleInputChange(e)}
                  size="small"
                />
                {/* <InputLabel id="sex">Sex</InputLabel>
                <Select
                  sx={{ minWidth: '100%' }}
                  labelId="sex"
                  id="sex"
                  value={inputs.sex}
                  label="Sex"
                  onChange={(e) => handleInputChange(e)}
                  size="small"
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>

                </Select> */}
              </div>
              <div className="input-container">
                <TextField
                  label="Color"
                  id="color"
                  value={inputs.color}
                  onChange={(e) => handleInputChange(e)}
                  size="small"
                />
              </div>
              <div className="input-container">
                <TextField
                  label="Markings"
                  id="markings"
                  value={inputs.markings}
                  onChange={(e) => handleInputChange(e)}
                  multiline
                  rows={4}
                  size="small"
                />
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
                <TextField
                  label="AM Feed"
                  id="amFeed"
                  value={inputs.amFeed}
                  onChange={(e) => handleInputChange(e)}
                  size="small"
                />
              </div>
              <div className="input-container">
                <TextField
                  label="PM Feed"
                  id="pmFeed"
                  value={inputs.pm_feed}
                  onChange={(e) => handleInputChange(e)}
                  size="small"
                />
              </div>
              <div className="input-container">
                <TextField
                  label="Supplements"
                  id="supplements"
                  value={inputs.supplements}
                  onChange={(e) => handleInputChange(e)}
                  size="small"
                />
              </div>
              <div className="input-container">
                <TextField
                  label="Turnout"
                  id="turnout"
                  value={inputs.turnout}
                  onChange={(e) => handleInputChange(e)}
                  size="small"
                />
              </div>
              <div className="input-container">
                <TextField
                  label="Blanketing Temp"
                  id="blanketingTemp"
                  value={inputs.blanketingTemp}
                  onChange={(e) => handleInputChange(e)}
                  size="small"
                />
              </div>
              <div className="input-container">
                <TextField
                  label="Other Notes"
                  id="Notes"
                  value={inputs.notes}
                  onChange={(e) => handleInputChange(e)}
                  multiline
                  rows={4}
                  size="small"
                />
              </div>
              <div className="button-wrapper">
                <button className='back-button' onClick={(e) => handleBack(e)}>Back</button>
                <button className='next-button' onClick={(e) => handleNext(e)}>Next</button>
              </div>
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