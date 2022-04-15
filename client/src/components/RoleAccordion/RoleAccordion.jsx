import React, { useState } from 'react';
import './RoleAccordion.css'

const Accordion = ({ title, content, image }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      <div className='accordionWrapper'>
      {isActive && <div className="accordion-content">{content}</div>}
      {isActive && <img width='150px' src={image} alt=''/>}
      </div>
    </div>
  );
}; 

export default Accordion;
