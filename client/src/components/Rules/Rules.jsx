import React from 'react';
import { rolesData } from '../../rolesData'
import RoleAccordion from '../RoleAccordion/RoleAccordion';


function Rules(props) {
  return (
    <>
    <h3 className="headers-text" align='center'>Правила игры</h3>
    <div className="accordion">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi incidunt asperiores deserunt at consectetur, 
        officiis impedit delectus molestias, tenetur ex aliquam praesentium dolorem molestiae omnis, natus debitis in 
        laboriosam numquam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur nam expedita 
        maxime ipsam nulla, iure dolorem dolor laudantium eius ducimus fugiat fuga, corporis consequuntur, 
        labore cum accusantium repellendus perspiciatis!</p>
    </div>
    <div>
      <h3 className="headers-text" align='center'>Игровые роли</h3>
      <div className="accordion">
        {rolesData.map(({ title, content }) => (
          <RoleAccordion title={title} content={content} />
          ))}
      </div>
    </div>
    </>
    
  );
}

export default Rules;
