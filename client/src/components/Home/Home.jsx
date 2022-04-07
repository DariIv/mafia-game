import React from 'react';
import './Home.css'
import { useNavigate } from 'react-router';

function Home(props) {
  const navigate = useNavigate()
  const navigateGame = () => {
    navigate('/game')
  }
  return (
    <>
      <div className="card bg-dark text-white startGame">
        <img src="https://irk.today/wp-content/uploads/2020/10/obzor-mafia-definitive-edition-remeyk-legendy-18-let-spustya-2.jpg" className="card-img" alt="..." />
        <div className="card-img-overlay btn">
          <button onClick={navigateGame} className='btn btn-dark' style={{zoom: '2'}} >START GAME</button>
        </div>
      </div>
    </>
  );
}

export default Home;
