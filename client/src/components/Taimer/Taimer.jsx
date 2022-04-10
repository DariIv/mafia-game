import React, { useEffect, useRef, useState } from 'react';
import { CountdownCircleTimer} from "react-countdown-circle-timer";
import style from './timerStyles.module.css'

function Taimer(props) {

  const formatRemainingTime = (remainingTime) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    return `${minutes}:${seconds}`
  }
   
  const renderNight = ({ remainingTime }) => { 
    if (remainingTime === 0) {
      return <div className={style.timer}>ДЕНЬ!</div>;
    }
  
    return (
      <div className={style.timer}>
        <div className={style.textN}>ДО НАЧАЛА ДНЯ:</div>
        <div className={style.value}>{remainingTime}</div>

      </div>
    );
  };
  
  const renderDay = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className={style.timer}>НОЧЬ!</div>;
    }
  
    return (
      <div className={style.timer}>
        <div className={style.textD}>ДО НАЧАЛА НОЧИ:</div>
        <div className={style.value}>{formatRemainingTime(remainingTime)}</div>
      </div>
    );
  };
  

  return (
    <div className={style.wrapper}>
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
          duration={300}          //установка секунд
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[230, 120, 60, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 5 })}
        >
          {renderDay}
        </CountdownCircleTimer>
      </div>

      <div className={style.timerWrapper}>
        <CountdownCircleTimer
           
           // updateInterval={0}  //скорость до следующей секунды
           // size={180}          //размер круга
           strokeWidth={12}    //толщина круга   
           // trailStrokeWidth={40}  //толщина заднего фона строки 
           // strokeLinecap={'round'} //форма конца шкалы 'round | square | butt'
           // isSmoothColorTransition={true} //резкий переход цветов true/false
           // rotation={'clockwise'} //напрвление хода шкалы 'clockwise | counterclockwise'
           // children
           // onUpdate={(remainingTime: 1) => }
           
          // initialRemainingTime={59} //хчерез сколько секунд начнется основной таймер
          isPlaying={true}             //можно навесить кнопку паузы (true/false)
          duration={59}          //установка секунд
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[45, 25, 10, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 5 })}
          >
          {renderNight}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default Taimer;

// import React, { useRef, useState } from "react";
// import ReactDOM from "react-dom";
// import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import "./styles.css";

// function Taimer(props) {

//   const renderTime = ({ remainingTime }) => {
//     const currentTime = useRef(remainingTime);
//     const prevTime = useRef(null);
//     const isNewTimeFirstTick = useRef(false);
//     const [, setOneLastRerender] = useState(0);
  
//     if (currentTime.current !== remainingTime) {
//       isNewTimeFirstTick.current = true;
//       prevTime.current = currentTime.current;
//       currentTime.current = remainingTime;
//     } else {
//       isNewTimeFirstTick.current = false;
//     }
  
//     // force one last re-render when the time is over to tirgger the last animation
//     if (remainingTime === 0) {
//       setTimeout(() => {
//         setOneLastRerender((val) => val + 1);
//       }, 20);
//     }
  
//     const isTimeUp = isNewTimeFirstTick.current;
  
//     return (
//       <div className="time-wrapper">
//         <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
//           {remainingTime}
//         </div>
//         {prevTime.current !== null && (
//           <div
//             key={prevTime.current}
//             className={`time ${!isTimeUp ? "down" : ""}`}
//           >
//             {prevTime.current}
//           </div>
//         )}
//       </div>
//     );
//   };
