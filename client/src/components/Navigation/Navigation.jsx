import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Navigation.css'

function Navigation() {

  // const {user} = useSelector(state => state)

  return (
    <nav className="main navbar navbar-expand-lg navbar-dark" id="headerFooter">

      <div className="collapse navbar-collapse col-4" id="left-header">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to='/profile'>Профиль <span className="sr-only"></span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Роли</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/game">Играть</Link>
          </li>
        </ul>
      </div>

      <div className="collapse navbar-collapse col-4" id="center-header">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Mafia <span className="sr-only"></span></Link>
          </li>
        </ul>
      </div>

      <div className="collapse navbar-collapse col-4" id="right-header">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link"  to="/registration"><i className="fa fa-user-secret" aria-hidden="true" id="rightIcon"></i> <span className="sr-only"></span></Link>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navigation;
