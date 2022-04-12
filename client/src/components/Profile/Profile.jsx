import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { usersReducer } from 'redux';
import './Profile.css'
// const { users } = require('../Registration/Registration')

function Profile() {
  const { users } = useSelector(state => state.usersReducer)

const userName = localStorage.getItem('user')

  const userProf = (event) => {
    event.preventDefault()

/// АНЯ СКАЗАЛА НЕ НАДО

    // fetch('http://localhost:4000/session', {
    //   method: 'GET',
    // })
    //   .then(res => res.json())

    //   .then(data => {
    //   })
  }
  // console.log(users);

  return (
    <div className="container">
      <h1>Profile</h1>
      <p className="textName">{`Приветствую, ${userName}`}</p>
      <div>
        <div className="service-details">
          {/* <label htmlFor="image" className="photoProf">{image}</label> */}
          <div className="photoProf">
            <img src="data:image/jpeg;base64,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" alt="" />
            {/* <span> <Link href="http://www.hartzis.me/react-image-upload/" /Link>
            </span> */}


            {/* <img src={require('path/to/img.png'.default}/> */}
            {/* <input value={image} onChange={({ target }) => setImage(target.value)} type="text" className="photoProf" id="image" /> */}
          </div>
          <div className="service-hover-text">
            {/* {sessionStorage.getItem()} */}
          </div>
          <br />
          <div className="statisti">
            <h5>Количесво игр:</h5>
            {/* {game} */}
            <br />
            <h5>Победы:</h5>
            {/* {game.win} */}
            <h3></h3>
          </div>

        </div>
      </div>
      <br />
      <Link className="btn_srtyle" to="/game">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Начать играть
      </Link>

    </div >
  );
}

export default Profile;
