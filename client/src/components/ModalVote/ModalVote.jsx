import React from 'react';
import './ModalVote.css'
import { Voting } from '../Voting/Voting';
import Container from '../Voting/Container';

function ModalVote({night}) {
  return (
    <div className={night ? 'modalWrapper openModalWrapper' : 'modalWrapper closedModalWrapper'}>
      <div className='modalBody'>
        <Voting>
          <Container/>
        </Voting>
      </div>
    </div>
  );
}

export default ModalVote;
