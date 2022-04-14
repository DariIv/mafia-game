import React from 'react';
import './ModalVote.css'
import Voting from '../Voting/Voting';

function ModalVote({night}) {
  return (
    <div className={night ? 'modalWrapper openModalWrapper' : 'modalWrapper closedModalWrapper'}>
      <div className='modalBody'>
        <Voting />
      </div>
    </div>
  );
}

export default ModalVote;
