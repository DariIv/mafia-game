import React from 'react';
import './ModalVote.css'


function ModalVote({night}) {
  return (
    <div className={night ? 'modalWrapper openModalWrapper' : 'modalWrapper closedModalWrapper'}>
      <div className='modalBody'>
       
      </div>
    </div>
  );
}

export default ModalVote;
