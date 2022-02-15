import './Form.scss';
import MicroModal from 'micromodal';
import { useState } from 'react';
import ContactFormlet from '../ContactFormlet/ContactFormlet';
import mockData from "../mockData";
import { addHorseQuery, addFarrierQuery, addOwnerQuery, addVetQuery, fetchAllFarriers, fetchAllVets, fetchAllOwners, updateHorseQuery } from '../graphqlQueries.js';
import { useMutation } from '@apollo/client';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


function Form({currentHorse}) {
  const initialInputsState = currentHorse ? currentHorse : {
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
    ownerId: 0,
    vetId: 0,
    farrierId: 0,
    barnId: 2
  };

  const [inputs, setInputs] = useState(initialInputsState);
  const [formPage, setFormPage] = useState(1);

  const [addHorse] = useMutation(addHorseQuery);
  const [updateHorse] = useMutation(updateHorseQuery);

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

  const handleImageUpload = () => {
     const [image, setImage ] = useState("");
      const [ url, setUrl ] = useState("");
      const uploadImage = () => {
      const data = new FormData()
      data.append("file", image)
      data.append("upload_preset", "tutorial")
      data.append("cloud_name","breellz")
      fetch("  https://api.cloudinary.com/v1_1/breellz/image/upload",{
      method:"post",
      body: data
      })
      .then(resp => resp.json())
      .then(data => {
      setUrl(data.url)
      })
      .catch(err => console.log(err))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newInputs = {...inputs};
    if (currentHorse) {
      const currentId = Number(newInputs.id);
      delete newInputs.id;
      delete newInputs.__typename;
      updateHorse({
        variables: {input: {id: currentId, params: newInputs}}
      })
    } else {
      addHorse({
        variables: {input: {params: newInputs}}
      })
    }

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

  const updateContactID = (e) => {
    e.preventDefault();
    const newInputs = {...inputs};
    newInputs[e.target.id] = Number(e.target.value);
    setInputs(newInputs);
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
                  type="number"
                />
              </div>
              <div className="input-container">
                <TextField
                    label="Age"
                    id="age"
                    value={inputs.age}
                    onChange={(e) => handleInputChange(e)}
                    size="small"
                    type="number"
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
                  value={inputs.pmFeed}
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
                  type="number"
                />
              </div>
              <div className="input-container">
                <TextField
                  label="Other Notes"
                  id="notes"
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
              contactType={"owner"} 
              mutationQuery={addOwnerQuery}
              queryName={fetchAllOwners}
              resType="fetchOwners"
              updateContactID={updateContactID} />
            <ContactFormlet 
              contactType={"farrier"} 
              mutationQuery={addFarrierQuery}
              queryName={fetchAllFarriers}
              resType="fetchFarriers"
              updateContactID={updateContactID} />
            <ContactFormlet 
              contactType={"vet"} 
              mutationQuery={addVetQuery}
              queryName={fetchAllVets}
              resType="fetchVets"
              updateContactID={updateContactID}
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