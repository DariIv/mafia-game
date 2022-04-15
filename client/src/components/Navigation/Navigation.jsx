import React, { useEffect } from 'react';
import style from './Navigation.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'





function Navigation(props) {

  const nameUser = localStorage.getItem('user')

  const { users } = useSelector(state => state.usersReducer)

  return (
    <div className={style.nawWrapper}>
      <div>
        <Link className={style.mafiaColorLink} to='/game'>MAFIA</Link>
      </div>

      {nameUser ?

      <div className={style.linksWrapper}>
        <Link className={style.links} to='/rules'>ПРАВИЛА</Link>
        <Link className={style.links} to='/'>ИГРАТЬ</Link>
      </div> : 
        <div className={style.linksWrapper}>
        <Link className={style.links} to='/game'>ИГРАТЬ</Link>
        <Link className={style.links} to='/rules'>ПРАВИЛА</Link>
        <Link className={style.links} to='/'>ВОЙТИ</Link>
      </div>}
    </div>
  );
}

export default Navigation;
