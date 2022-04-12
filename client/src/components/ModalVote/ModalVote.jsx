import React, { useState } from 'react';
import './ModalVote.css'

function ModalVote({night}) {
  return (
    <div className={night ? 'modalWrapper openModalWrapper' : 'modalWrapper closedModalWrapper'}>
      <div className='modalBody'>
        <h2>Голосование Началось!</h2>
        Голосование
      </div>
    </div>
  );
}

export default ModalVote;
