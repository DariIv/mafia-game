import React from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="main mb-4 navbar navbar-expand-lg navbar-dark" id="headerFooter">

      <div className="collapse navbar-collapse col-4" id="left-header">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Профиль <span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Роли</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Играть</a>
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
            <a className="nav-link" href="/">Логин <span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Регистрация</a>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navigation;
