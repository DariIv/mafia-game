//Логика подключения отключения на клиенте

import { useState, useEffect, useRef } from 'react';
import {socket} from '../../socket/socket.chat';
import ACTIONS from '../../socket/actions';
import { useNavigate } from 'react-router';
import { v4 } from 'uuid';

export default function Main() {
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

  return (
    <div ref={rootNode}>
      <h1>Available Rooms</h1>

      <ul>
        {rooms.map(roomID => (
          <li key={roomID}>
            {roomID}
            <button onClick={() => {                                               
              navigate(`/room/${roomID}`)  //добавляем комнаты
            }}>JOIN ROOM</button>
          </li>
        ))}
      </ul>

      <button onClick={() => {
        navigate(`/room/${v4()}`)  //создаем свою комнату, генерим комнату и айдишку
      }}>Create New Room</button>
    </div>
  );
}