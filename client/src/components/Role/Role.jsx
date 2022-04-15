import React from 'react';
import './Role.css'

function Role({randomRole}) {
  return (
    <div className='container cardRole'>
      <h5 class="card-title"> ТВОЯ РОЛЬ: {randomRole}</h5>
    </div>
  );
}

export default Role;
