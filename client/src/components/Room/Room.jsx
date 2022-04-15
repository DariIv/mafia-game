import { useParams } from 'react-router';
import style from './Room.module.css';
import useWebRTC, { LOCAL_VIDEO } from '../customHooks/useWebRTC';


// import { useEffect, useLayoutEffect, useState } from 'react';
// import { socket } from '../../socket/socket.chat';
// import { useDispatch } from 'react-redux';
// import { addNickAC } from '../../redux/actionCreators/chatAC';

export default function Room() {

  const { id: roomID } = useParams();
  const { clients, provideMediaRef } = useWebRTC(roomID);
  let role = ['мирный', 'мафия', 'мирный', 'мирный'];
  let randomRole = role[Math.floor(Math.random() * 3)]
  localStorage.setItem('randomRole', randomRole)


  return (
    <>

      <div className={style.wrapper}>
        <div className={style.videoWrapper}>

          {clients.map((clientID, users, xz) => {
            return (
              <div className={style.blockVideo} key={clientID} id={clientID}>
                <span style={{ fontSize: '20px' }}> Name:{clientID.slice(0, 4)} </span>
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

              </div>

            );
          })}
        </div>
        <div className={style.startGameButton}>
          <TaimerStart />
          <div>
            <Role />
          </div>
        </div>
        <div>
          <Chat />
        </div>
        <ModalForPeople />
      </div>

    </>
  );
}
