// import { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router';
import Chat from '../Chat/Chat';
import useWebRTC, { LOCAL_VIDEO } from '../customHooks/useWebRTC';
import './Room.css'
// import { socket } from '../../socket/socket.chat';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { addNickAC } from '../../redux/actionCreators/chatAC';
import { useCallback } from 'react';
import TaimerStart from '../TaimerStart/TaimerStart';
import ModalForPeople from '../ModalForPeople/ModalForPeople';
let randomProfile = require('random-profile-generator');


export default function Room() {

  const { id: roomID } = useParams();
  const { clients, provideMediaRef } = useWebRTC(roomID);
  let role = ['мирный', 'мафия', 'мирный', 'мирный'];
  let randomRole = role[Math.floor(Math.random() * 3)]
  localStorage.setItem('randomRole', randomRole)
  let name = ['ETO YA', 'slon', 'epta']
  let client = clients.map((el,index) => el = {newClient:el, userName: name[index]})
  // let num ;
  // let el ;

  // for (let i = role.length - 1; i > 0; i--) {
  //   num = Math.floor(Math.random() * (i + 1))
  //   el = role[num]
  //   role[num] = role[i]
  //   role[i] = el
  // }
  // console.log(role);
  // if (localStorage.getItem('randomRole') === 'мирный'){
  //   let atr = document.querySelector('.video')
  //   atr.style.cssText += 'filter:blur(30px)'
  // }
  const qwer = localStorage.getItem('randomRole') === 'мирный'
  return (
    <>

      <div className='wrapper'>
        <span style={{ fontSize: '15px' }}>Я: {localStorage.getItem('randomRole')}</span><br />
        <div className='videoWrapper'>
          {client.map((clientID, index, xz) => {
            return (
              <div className='blockVideo' key={clientID.newClient} id={clientID.newClient}>
                <span style={{ fontSize: '15px' }}>id:{clientID.userName} </span>
                <video
                  className='video'
                  width='245px'
                  height='140px'
                  ref={instance => {
                    provideMediaRef(clientID.newClient, instance);
                  }}
                  autoPlay
                  playsInline
                  muted={clientID.newClient === LOCAL_VIDEO}
                />
              </div>

            );
          })}

        </div>

        <TaimerStart />
        <div>
          <Chat />
        </div>
        <ModalForPeople />
      </div>
    </>
  );
}
