import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navigation.module.css'

function Navigation(props) {
  return (
    <div className={style.nawWrapper}>
      <div>
        <Link className={style.mafiaColorLink} to='/'>MAFIA</Link>
      </div>
      <div>
        <Link className={style.links} to='/rules'>ПРАВИЛА</Link>
        <Link className={style.links} to='/registration'>ВОЙТИ</Link>
        <Link className={style.links} to='/'>ИГРАТЬ</Link>
      </div>
    </div>
  );
}

export default Navigation;
