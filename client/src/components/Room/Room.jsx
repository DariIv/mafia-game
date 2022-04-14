// import { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router';
import Chat from '../Chat/Chat';
import useWebRTC, { LOCAL_VIDEO } from '../customHooks/useWebRTC';
import './Room.css'
// import { socket } from '../../socket/socket.chat';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Taimer from '../Taimer/Taimer';
// import { addNickAC } from '../../redux/actionCreators/chatAC';
import { useCallback } from 'react';

export default function Room() {
  // const dispatch = useDispatch()
  const { id: roomID } = useParams();
  const { clients, provideMediaRef } = useWebRTC(roomID);
  
  // const { nick } = useSelector(state => state.nickReducer)
  
  return (
    <>

    <div className='wrapper'>
     <div className='videoWrapper'>

        {clients.map((clientID, users, xz) => {
          return (
            <div className='blockVideo' key={clientID} id={clientID}>
              <span> {clientID} </span>
              <video
                className='video'
                width='245px'
                height='140px'
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

      <Taimer />

      <div>
       <Chat />
      </div>

      </div>
    </>
  );
}
