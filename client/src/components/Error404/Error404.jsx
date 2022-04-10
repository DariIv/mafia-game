import React from 'react';
import style from './Error404.module.css'
import { useNavigate } from 'react-router';

function Error404(props) {
  const navigate = useNavigate()
  const navigateGame = () => {
    navigate('/')
  }
  return (
    <>
      <div className={style.tipoBody}>
      <h1 className={style.headers404} id='id404' align='center'>404</h1>
      <h2 className={style.headersText} id='id404header' align='center'>Page not found</h2>
        <div className={`card bg-dark text-white ${style.startGame} m-5`}>
          <img src="https://3dnews.ru/assets/external/illustrations/2016/09/12/939307/sm.Mafia3_screen2.750.jpg" className="card-img" alt="..." />
          <div className="card-img-overlay btn">
            <button onClick={navigateGame} className='btn btn-dark' style={{ zoom: '2' }} >Вернуться на главную</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error404;
