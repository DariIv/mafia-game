import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { socket } from '../../socket/socket.chat';
import ACTIONS from '../../socket/actions';
import { useNavigate } from 'react-router';
import { v4 } from 'uuid';
import './Home.css'
import Taimer from '../Taimer/Taimer';
import ModalVote from '../ModalVote/ModalVote';

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
    <>
      {/* <Taimer /> */}
      <div className='tipoBody' ref={rootNode}>
        <div className="card bg-dark text-white startGame">
          <img src="https://irk.today/wp-content/uploads/2020/10/obzor-mafia-definitive-edition-remeyk-legendy-18-let-spustya-2.jpg" className="card-img" alt="..." />
          <h3>Available Rooms</h3>

          <ul>
            {rooms.map(roomID => (
              <span key={roomID}>
                {/* {roomID} */}
                <button className="btn btn-secondary" onClick={() => {
                  navigate(`/room/${roomID}`)  //добавляем комнаты
                }}>JOIN ROOM</button>

              </span>
            ))}
          </ul>
          <button className="btn btn-secondary" onClick={() => {
            navigate(`/room/${v4()}`)  //создаем свою комнату, генерим комнату и айдишку
          }}>CREATE NEW 1ROOM</button>
        </div>
      </div>

    </>
  );
}

export default Home;
