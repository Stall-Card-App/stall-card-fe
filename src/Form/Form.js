import './Form.scss';
import MicroModal from 'micromodal';
import { useState } from 'react';
import ContactFormlet from '../ContactFormlet/ContactFormlet';

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
  barn_id: null,
  owner_id: null,
  vet_id: null,
  farrier_id: null
}

function Form() {
  const [inputs, setInputs] = useState(initialInputsState)
  const [formPage, setFormPage] = useState(1)

  const handleInputChange = (e) => {
    e.preventDefault();
    const newInputs = {...inputs};
    newInputs[e.target.id] = e.target.value;
    setInputs(newInputs)
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
                <label htmlFor="stall_number">Stall Number</label>
                <input id="stall_number" type="number" value={inputs.stall_number} onChange={(e) => handleInputChange(e)} />
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
              <div className="input-container">
                <label htmlFor="am_feed">AM Feed</label>
                <input id="am_feed" type="text" value={inputs.am_feed} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="input-container">
                <label htmlFor="pm_feed">PM Feed</label>
                <input id="pm_feed" type="text" value={inputs.pm_feed} onChange={(e) => handleInputChange(e)} />
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
                <label htmlFor="blanketing_temp">Blanketing Temp</label>
                <input id="blanketing_temp" type="text" value={inputs.blanketing_temp} onChange={(e) => handleInputChange(e)} />
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
                <label htmlFor="am_feed">AM Feed</label>
                <input id="am_feed" type="text" value={inputs.am_feed} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="input-container">
                <label htmlFor="pm_feed">PM Feed</label>
                <input id="pm_feed" type="text" value={inputs.pm_feed} onChange={(e) => handleInputChange(e)} />
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
                <label htmlFor="blanketing_temp">Blanketing Temp</label>
                <input id="blanketing_temp" type="text" value={inputs.blanketing_temp} onChange={(e) => handleInputChange(e)} />
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
            <ContactFormlet contactType={"owner"} handleInputChange={handleInputChange}/>
            <ContactFormlet contactType={"farrier"} handleInputChange={handleInputChange}/>
            <ContactFormlet contactType={"vet"} handleInputChange={handleInputChange}/>
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