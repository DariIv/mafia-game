import React from 'react';
import './Role.css'

function Role({randomRole}) {
  return (
    <div className='container cardRole'>
      <h5 class="card-title"> Твоя роль: {randomRole}</h5>
    </div>
  );
}

export default Role;
