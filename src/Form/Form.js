import './Form.scss';
import MicroModal from 'micromodal';
import { useState } from 'react';
import ContactFormlet from '../ContactFormlet/ContactFormlet';
import mockData from "../mockData";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const initialInputsState = {
  name: '',
  stall_number: 0,
  age: 0,
  breed: '',
  sex: '',
  color: '',
  markings: '',
  notes: '',
  am_feed: '',
  pm_feed: '',
  supplements: '',
  turnout: '',
  blanketing_temp: 0,
  owner: {
    owner_id: null,
    name: '',
    telephone_number: ''
  },
  vet: {
    vet_id: null,
    name: '',
    telephone_number: ''
  },
  farrier: {
    farrier_id: null,
    name: '',
    telephone_number: ''
  },
  barn_id: null
}

function Form() {
  const [inputs, setInputs] = useState(initialInputsState)
  const [formPage, setFormPage] = useState(1)

  const handleInputChange = (e) => {
    e.preventDefault();
    const newInputs = {...inputs};
    newInputs[e.target.id] = e.target.value;
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
    console.log(inputs);
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
                  value={inputs.stall_number}
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
                  value={inputs.am_feed}
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
                  value={inputs.blanketing_temp}
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
            <ContactFormlet contacts={mockData.data.owners} contactType={"owner"} handleContactChange={handleContactChange} contactData={initialInputsState.owner} />
            <ContactFormlet contacts={mockData.data.farriers} contactType={"farrier"} handleContactChange={handleContactChange} contactData={initialInputsState.farrier} />
            <ContactFormlet contacts={mockData.data.vets} contactType={"vet"} handleContactChange={handleContactChange} contactData={initialInputsState.vet} />
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