import React from 'react';
import { useSelector } from 'react-redux'
import './Navigation.css'
import { Link } from 'react-router-dom';

function Navigation() {

  // const {user} = useSelector(state => state)

  return (
    <nav className="main navbar navbar-expand-lg navbar-dark" id="headerFooter">

      <div className="collapse navbar-collapse col-4" id="left-header">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Профиль <span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Роли</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/game">Играть</a>
          </li>
          <li className="nav-item">
            <Link to='/rules' className="nav-link" >Правила</Link>
          </li>
        </ul>
      </div>

      <div className="collapse navbar-collapse col-4" id="center-header">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Mafia <span className="sr-only"></span></a>
          </li>
        </ul>
      </div>

      <div className="collapse navbar-collapse col-4" id="right-header">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link"  href="/registration"><i className="fa fa-user-secret" aria-hidden="true" id="rightIcon"></i> <span className="sr-only"></span></a>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navigation;
