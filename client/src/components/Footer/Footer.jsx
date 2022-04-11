import React from 'react';
import { Link } from 'react-router-dom'

function Footer(props) {
  return (

    <nav className="main navbar navbar-expand-lg navbar-dark fixed-bottom" id="headerFooter">
    <div className="collapse navbar-collapse col-4" id="center-header">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Mafia<span className="sr-only" /></Link>
          </li>
        </ul>
      </div>
      </nav>
      
  );
}

export default Footer;
