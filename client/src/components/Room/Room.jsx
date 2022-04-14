import { useParams } from 'react-router';
import style from './Room.module.css';
import Chat from '../Chat/Chat';
import useWebRTC, { LOCAL_VIDEO } from '../customHooks/useWebRTC';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import TaimerStart from '../TaimerStart/TaimerStart';
import ModalForPeople from '../ModalForPeople/ModalForPeople';
let randomProfile = require('random-profile-generator');

// import { useEffect, useLayoutEffect, useState } from 'react';
// import { socket } from '../../socket/socket.chat';
// import { useDispatch } from 'react-redux';
// import { addNickAC } from '../../redux/actionCreators/chatAC';

export default function Room() {
  // const dispatch = useDispatch()
  const { id: roomID } = useParams();
  const { clients, provideMediaRef } = useWebRTC(roomID);
  let profile = randomProfile.profile()
  const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
  const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] })
  // const { nick } = useSelector(state => state.nickReducer)

  return (
    <>

      <div className={style.wrapper}>
        <div className={style.videoWrapper}>

          {clients.map((clientID, users, xz) => {
            return (
              <div className={style.blockVideo} key={clientID} id={clientID}>
                <span> xz[users] </span>
                <video
                  className={style.video}
                  width='320px'
                  height='200px'
                  ref={instance => {
                    provideMediaRef(clientID, instance);
                  }}
                  autoPlay
                  playsInline
                  muted={clientID === LOCAL_VIDEO}
                />
                {randomName}
              </div>

            );
          })}
        </div>
          <TaimerStart />
        <div className={style.startGameButton}>
        </div>
        <div>
          <Chat />
        </div>
        <ModalForPeople />
      </div>
    </>
  );
}
