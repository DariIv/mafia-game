import React, { useEffect, useRef, useState } from 'react';
import Taimer from '../Taimer/Taimer';
import { socket } from '../../socket/socket.chat';

function TaimerStart(props) {

  const [start, setStart] = useState(false)

const startTimer = () => {
      socket.emit('StartTimer', 'start')
      
    }
  useEffect(() => {
    socket.on('StartTimer', (msg) => {
        setStart(prev => !prev)
        console.log(msg);
        console.log(start);
      })
  }, [start])

  return (
    <div>
      {start ? (<Taimer />) : (<div><button onClick={startTimer}>START GAME</button></div>)}
    </div>
  );
}

export default TaimerStart;