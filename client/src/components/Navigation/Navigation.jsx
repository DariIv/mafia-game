import React, { useEffect } from 'react';
import style from './Navigation.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'





function Navigation(props) {
  let user = localStorage.getItem('userName')
  return (
    <>
      <div className={style.nawWrapper}>
        <div>

          <Link className={style.mafiaColorLink} to={user?'/game':'/'}>MAFIA</Link>
        </div>
        <div>
          {user ?
            <>
              <Link className={style.links} to='/rules'>ПРАВИЛА</Link>
              <Link className={style.links} to='/game'>ИГРАТЬ</Link>
              <Link className={style.links} to='/logout'>ВЫЙТИ</Link>
            </>
            :
            <>
              <Link className={style.links} to='/rules'>ПРАВИЛА</Link>
              <Link className={style.links} to='/registration'>ВОЙТИ</Link>
            </>
          }
        </div>
      </div>
    </>
  );
}

export default Navigation;
