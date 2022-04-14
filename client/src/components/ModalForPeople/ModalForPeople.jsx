import React from 'react';
import './ModalForPeople.css'
import Voting from '../Voting/Voting';

function ModalForPeople({night}) {
  return (
    <div className={night ? 'modalWrapper openModalWrapper' : 'modalWrapper closedModalWrapper'}>
      <div className='modalBody'>
        <Voting />
      </div>
    </div>
  );
}

export default ModalForPeople;
