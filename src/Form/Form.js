import './Form.scss';
import MicroModal from 'micromodal';

function Form() {
  MicroModal.init();
  return ( 
    <div className='modal' id="modal-1" aria-hidden="true">
      <div tabindex="-1" data-micromodal-close>
        <div className='modal-content' role="dialog" aria-modal="true" aria-labelledby="modal-1-title" >
          <header className='modal-header'>
            <h2 id="modal-1-title">
              Horse Info
            </h2>
            <button className='modal-exit' aria-label="Close modal" data-micromodal-close>x</button>
          </header>
          <div id="modal-1-content">
            Modal Content
          </div>
        </div>
      </div>
    </div>
   );
}

export default Form;