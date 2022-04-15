import { socket } from '../../socket/socket.chat';
import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Chat.css'
import { addMessAC } from '../../redux/actionCreators/chatAC';

function Chat(props) {
  const inputValue = useRef()
  const { mess } = useSelector(state => state.messReducer)
  console.log(mess);

  const dispatch = useDispatch()

  const addMess = (event) => {
    event.preventDefault()

    if (inputValue.current.value) {
      socket.emit('chat message', inputValue.current.value)
      inputValue.current.value = ''
    }
  }

  const scroll = useRef()

  useEffect(() => {

    socket.on('chat message', (msg) => {
      dispatch(addMessAC(msg))
      scroll.current.scrollIntoView(
        {
          behavior: 'smooth',
        })
    });
  }, [dispatch])
  //hard user

  const user = 'Vottema:'
  return (
    <>
      <div className='chatWrap'>
        <div className="chat">
          <div className="chat-title">
          </div>
          <div className="messages">
            <div className="messages-content mess">
              {mess.length ? mess.map((el, index) => <div ref={scroll} className='message message-personal' key={index}><span style={{ color: 'black', zoom: '1.5' }}>{user}</span><br />{el}</div>) : ''}
            </div>
          </div>
          <form onSubmit={addMess}>
            <div className="message-box">
              <textarea ref={inputValue} type="text" className="message-input" placeholder="Напишите сообщение..."></textarea>
              <button type="submit" className="message-submit">ОТПРАВИТЬ</button>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="bg"></div> */}
    </>
  );
}

export default Chat;
