import React, { useState } from 'react';
import Chat from '../Chat/Chat';
import './Game.css'

import './Game.css';

function Game(props) {

  const [gameOver, setGameOver] = useState(true);
  const [winner, setWinner] = useState('');
  // Доску тоже надо поставить для всех игроков
  // const [player1Deck, setPlayer1Deck] = useState([]);
  const [turn, setTurn] = useState('');
  const [playerCard, setPlayerCard] = useState([]);
  // сделать время которое сейчас? день или ночь?


  // useEffect - зарандомить роли


  return (
    <>
      <Chat />
      <section id="poker-skin-v1">


        <div className="poker-skin-v1-main-container">
          <div className="poker-table">
            <div className="poker-table-sub-container">
              <div className="poker-table-sub-container-grid">

                <div className="poker-table-grid-cell">
                  <h4 id="player-1">Albert45</h4>
                  <p>$5.00</p>
                </div>

                <div className="poker-table-grid-cell center">
                  <div className="center-flex">


                  </div>
                </div>

                <div className="poker-table-grid-cell">
                  <h4 id="player-3">RowdyRobert</h4>
                  <p>$10.00</p>
                </div>

                <div className="poker-table-grid-cell">
                  <h4 id="player-4">Marie-Lou</h4>
                  <p>$1.24</p>
                </div>

                <div className="poker-table-grid-cell my-cards">
                </div>

                <div className="poker-table-grid-cell">
                  <h4 id="player-6">Ellie-Bellie</h4>
                  <p>$6.00</p>
                </div>

                <div className="poker-table-grid-cell">

                </div>

                <div className="poker-table-grid-cell">

                </div>

                <div className="poker-table-grid-cell">
                  <div className="oponents-cards-container">

                  </div>
                </div>

                <div className="poker-table-grid-cell">
                  <div className="oponents-cards-container">

                  </div>
                </div>

                <div className="poker-table-grid-cell">
                </div>

                <div className="poker-table-grid-cell">
                  <h4 id="player-2">Vincent202</h4>
                  <p>$2.88</p>
                </div>

                <div className="poker-table-grid-cell">
                </div>

              </div>
            </div>

          </div>
        </div>


      </section>
    </>
  );
}

export default Game;
