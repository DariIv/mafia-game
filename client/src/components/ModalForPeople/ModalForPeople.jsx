import React from 'react';
import './ModalForPeople.css'

function ModalForPeople({night}) {
  return (
    <div className={night ? 'modalWrapper openModalWrapper' : 'modalWrapper closedModalWrapper'}>
      <div className='modalBody'>
      </div>
    </div>
  );
}

export default ModalForPeople;
