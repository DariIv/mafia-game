import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Logout.css'

function Logout(props) {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   fetch('http://localhost:4000/logout')
  
  //   dispatch({
  //     type: "DEL_USER",
  //   })
  // }, [dispatch])
  localStorage.removeItem('userName')
  setTimeout(() => {
    window.location.href = '/'
  }, 5000);

  return (

    <div className='wrapper'>
      <div className='moon'></div>
      <div className='orbit'></div>
      <div className='orbit2'></div>
      <div className='orbit3'></div>
      <div className='orbit4'></div>
      <div className='goodbye'>GOODBYE</div>
    </div>


  );
}

export default Logout;
