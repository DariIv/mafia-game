import { useParams } from 'react-router';
import style from './Room.module.css';
import useWebRTC, { LOCAL_VIDEO } from '../customHooks/useWebRTC';
import TaimerStart from '../TaimerStart/TaimerStart'
import ModalForPeople from '../ModalForPeople/ModalForPeople';
import Role from '../Role/Role'
import Chat from '../Chat/Chat';

export default function Room() {

  const { id: roomID } = useParams();
  const { clients, provideMediaRef } = useWebRTC(roomID);
  let role = ['МИРНЫЙ', 'МАФИЯ', 'МИРНЫЙ', 'МИРНЫЙ'];
  let randomRole = role[Math.floor(Math.random() * 3)]
  localStorage.setItem('randomRole', randomRole)

  return (
    <>

      <div className={style.wrapper}>
        <div className={style.videoWrapper}>
          {clients.map((clientID, users, xz) => {
            return (
              <div className={style.blockVideo} key={clientID} id={clientID}>
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
          <span style={{ fontSize: '20px' }}> NAME:{clientID.slice(0, 4)} </span>
        </div>
        <div className={style.startGameButton}>
          <TaimerStart />
          <div>
            <Role randomRole={randomRole} />
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
