import React from 'react';
import { rolesData } from '../../rolesData'
import RoleAccordion from '../RoleAccordion/RoleAccordion';
import style from './Rules.module.css'

function Rules(props) {
  return (
    <div className={style.rulesWrap}>
    <h3>Правила игры</h3>
    <div className="accordion">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi incidunt asperiores deserunt at consectetur, 
        officiis impedit delectus molestias, tenetur ex aliquam praesentium dolorem molestiae omnis, natus debitis in 
        laboriosam numquam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur nam expedita 
        maxime ipsam nulla, iure dolorem dolor laudantium eius ducimus fugiat fuga, corporis consequuntur, 
        labore cum accusantium repellendus perspiciatis!</p>
    </div>
    <div>
      <h3>Игровые роли</h3>
      <div className="accordion">
        {rolesData.map(({ title, content }) => (
          <RoleAccordion title={title} content={content} />
          ))}
      </div>
    </div>
   
    </div>
  );
}

export default Rules;
