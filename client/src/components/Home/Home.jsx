import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { socket } from '../../socket/socket.chat';
import ACTIONS from '../../socket/actions';
import { useNavigate } from 'react-router';
import { v4 } from 'uuid';
import Taimer from '../Taimer/Taimer';
import ModalVote from '../ModalVote/ModalVote';
import style from './Home.module.css'


function Home(props) {
  const navigate = useNavigate()
  const [rooms, updateRooms] = useState([]); //список
  const rootNode = useRef();

  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {  //получаем все комнаты которые есть
      if (rootNode.current) {
        updateRooms(rooms);   //обновляем комнаты когда они приходят
      }
    });
  }, []);
  console.log(rooms);
  return (
    <div className={style.gameWrapper}>

      <div className={style.regGame} ref={rootNode}>
      
        
          <h3>ДОСТУПНЫЕ КОМНАТЫ:</h3>

          <ul className={style.roomsList}>
            {rooms.map(roomID => (
              <li className={style.roomsLi} key={roomID}>
                {/* {roomID} */}
                <button className="btn btn-secondary" onClick={() => {
                  navigate(`/room/${roomID}`)  //добавляем комнаты
                }}>ПРИСОЕДИНИТЬСЯ К КОМНАТЕ</button>
              </li>
            ))}
          </ul>

          <button className="btn btn-secondary" onClick={() => {
            navigate(`/room/${v4()}`)  //создаем свою комнату, генерим комнату и айдишку
          }}>СОЗДАТЬ НОВУЮ КОМНАТУ</button>

      </div>
      
    </div>
  );
}

export default Home;
