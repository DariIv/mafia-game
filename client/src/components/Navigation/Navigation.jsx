import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Navigation.css'
// import { addUserAc } from '../../redux/actionCreators/usersAC'

function Navigation() {
  

  const nameUser = localStorage.getItem('user')
  // console.log(nameUser);

  const { users } = useSelector(state => state.usersReducer)


  return (
    <nav className="main navbar navbar-expand-lg navbar-dark" id="headerFooter">

      <div className="collapse navbar-collapse col-4 navbar-nav mr-auto nav-item" id="left-header">

        {nameUser ?

          <>

            <Link className="nav-link" to='/profile'>Профиль</Link>

            <Link className="nav-link" to="/game">Играть</Link>


            <Link to='/rules' className="nav-link" >Правила</Link>


            <div className="collapse navbar-collapse col-4" id="center-header">
              <ul className="">

                <Link className="nav-link" to="/">Mafia <span className="sr-only"></span></Link>

              </ul>
            </div>

            <Link className="nav-link" to="/logout"><i className="fa fa-user-times" aria-hidden="true" id="iconProf"></i> <span className="sr-only"></span></Link>

          </>
          :
          <>
            <Link className="nav-link" to="/game">Играть</Link>


            <Link to='/rules' className="nav-link" >Правила</Link>


            <div className="collapse navbar-collapse col-4" id="center-header">
              <ul className="navbar-nav mr-auto nav-item">

                <Link className="nav-link" to="/">Mafia <span className="sr-only"></span></Link>

              </ul>
            </div>

            <Link className="nav-link" to="/registration"><i className="fa fa-user-secret" aria-hidden="true" id="iconProf"></i> <span className="sr-only"></span></Link>


          </>
        }


      </div>

    </nav>
  );
}

export default Navigation;
