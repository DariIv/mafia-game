import ModalVote from '../ModalVote/ModalVote';
import TaimeSound from './timer-bell.mp3'
import style from './timerStyles.module.css'
import React, { useState, useEffect } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Howl } from 'howler';
import { socket } from '../../socket/socket.chat';

function Taimer(props) {

  const [day, setDay] = useState(true)
  const [night, setNight] = useState(false)
  const [start,setStart] = useState(false)

  const soudBell = TaimeSound

  const soundPlay = (src) => {
    const sound = new Howl({
      src
    })
    sound.play()
  };

  const formatRemainingTime = (remainingTime) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    return `${minutes}:${seconds}`
  }

  const renderNight = ({ remainingTime }) => {

    if (remainingTime === 0) {
      setTimeout(() => {
        soundPlay(soudBell)
      }, 100);
      setNight(false)
      setDay(true)
      return <div className={style.timer}>ДЕНЬ!</div>;
    }

    return (
      <div className={style.timer}>
        <div className={style.textN}>ДЕНЬ ЧЕРЕЗ:</div>
        <div className={style.value}>{remainingTime}</div>

      </div>
    );
  };

  const renderDay = ({ remainingTime }) => {

    if (remainingTime === 0) {
      setTimeout(() => {
        soundPlay(soudBell)
      }, 100);

      setDay(false)
      setNight(true)
      return <div className={style.timer}>НОЧЬ!</div>;
    }

    return (
      <div className={style.timer}>
        <div className={style.textD}>НОЧЬ ЧЕРЕЗ:</div>
        <div className={style.value}>{formatRemainingTime(remainingTime)}</div>
      </div>
    );
  };

  return (
    <>
      <div className={style.wrapper}>
        {day && (
          <div className={style.timerWrapper}>
            <CountdownCircleTimer

              // initialRemainingTime={15} //хчерез сколько секунд начнется основной таймер
              // updateInterval={0}  //скорость до следующей секунды
              // size={180}          //размер круга
              // strokeWidth={12}    //толщина круга   
              // trailStrokeWidth={40}  //толщина заднего фона строки 
              // strokeLinecap={'round'} //форма конца шкалы 'round | square | butt'
              // isSmoothColorTransition={true} //резкий переход цветов true/false
              // rotation={'clockwise'} //напрвление хода шкалы 'clockwise | counterclockwise'
              // children
              // onUpdate={(remainingTime: 1) => }

              isPlaying={true}             //можно навесить кнопку паузы (true/false)
              duration={5}          //установка секунд
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[230, 120, 60, 0]}
              onComplete={() => ({ shouldRepeat: true, delay: 5 })}
            >
              {renderDay}
            </CountdownCircleTimer>
          </div>
        )}
        {night && (
          <div className={style.timerWrapper}>
            <CountdownCircleTimer

              // updateInterval={0}  //скорость до следующей секунды
              // size={180}          //размер круга
              //  strokeWidth={12}    //толщина круга   
              // trailStrokeWidth={40}  //толщина заднего фона строки 
              // strokeLinecap={'round'} //форма конца шкалы 'round | square | butt'
              // isSmoothColorTransition={true} //резкий переход цветов true/false
              // rotation={'clockwise'} //напрвление хода шкалы 'clockwise | counterclockwise'
              // children
              // onUpdate={(remainingTime: 1) => }

              // initialRemainingTime={59} //хчерез сколько секунд начнется основной таймер
              isPlaying={true}             //можно навесить кнопку паузы (true/false)
              duration={50}          //установка секунд
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[45, 25, 10, 0]}
              onComplete={() => ({ shouldRepeat: true, delay: 15 })}
            >
              {renderNight}
            </CountdownCircleTimer>
          </div>
        )}
      </div>
      <ModalVote night={night} />
    </>
  );
}

export default Taimer;
