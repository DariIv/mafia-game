import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUserAc } from '../../redux/actionCreators/usersAC'
import './Registation.css'

function Registration(props) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginValue = useRef()
  const emailValue = useRef()
  const passwordValue = useRef()

  const [errCheck, setErrCheck] = useState(false)
  const [message, setMessage] = useState()
  const [sucCheck, setSucCheck] = useState(false)

  const addUser = (event) => {
    event.preventDefault()

    const newUser = {
      user_name: loginValue.current.value,
      user_email: emailValue.current.value,
      user_password: passwordValue.current.value
    }
    // console.log('qwe');
    fetch('http://localhost:4000/registration', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    
    .then(data => {
      console.log(data);
      if (data.status === 400) {
          console.log(message.status);
            setMessage(data.message)
            setErrCheck(true)
          }
          if (data.status === 200) {
              setMessage(data.message)
              setErrCheck(false)
              setSucCheck(true)
              console.log('привет');
              setTimeout(() => {
                  navigate('/')
          }, 1000)
        }
      })
      .then(data => dispatch(addUserAc(data)))
  }

  // const formBox = document.querySelector('.form-box')
  // const regBody = document.bodyReg;

  // function signIn(){
  //   formBox.classList.add('active')
  //   regBody.classList.add('active')
  //   console.log(formBox);
  //   console.log(regBody);
  // }


  // function signUp(){
  //   formBox.classList.remove('active')
  //   regBody.classList.remove('active')
  // }


  // const signIn = document.querySelector('.signin-btn')
  // console.log(signIn);
  // const signUp = document.querySelector('.signup-btn')
  // console.log(signUp);
  // const formBox = document.querySelector('.form-box')
  // const regBody = document.bodyReg;

  // signUp.addEventListener('click', function () {

  //   formBox.classList.add('active')
  //   regBody.classList.add('active')
  // })

  // signIn.addEventListener('click', function () {
  //   formBox.classList.remove('active')
  //   regBody.classList.remove('active')
  // })



  return (
    <div>
      <div className="bodyReg">

        <article className="container">

          <div className="block">
            <section className="block_item block-item">
              {/* <h3 className="block-iten_tittle"> Есть аккаунт ?</h3> */}
              {/* <button  className="block-item_btn signin-btn">Войти</button> */}
            </section>
            <section className="block_item block-item">
              {/* <h3 className="block-iten_tittle"> Нет аккаунта ?</h3> */}
              {/* <button  className="block-item_btn signup-btn"> Скорее регистрируйся!</button> */}
            </section>
          </div>

          <div className="form-box">

            <form className="form form_signup" onSubmit={addUser}>
              <h3 className="form_title">Рега</h3>
              <p>
                <input name='login' type="text" ref={loginValue} className="form_input" placeholder="Логин" />
              </p>
              <p>
                <input name='email' type="email" ref={emailValue} className="form_input" placeholder="email" />
              </p>
              <p>
                <input name='password' type="password" ref={passwordValue} className="form_input" placeholder="Пароль" />
              </p>
              {/* <p>
                <input type="password" className="form_input" placeholder="Подтвердите пароль" />
              </p> */}
              <p>
                <button type='submit' className="form_btn form_btn_signup"  >Зарегаться</button>
              </p>
              <p>
                <a className="form_forgot">Востановить пароль</a>
              </p>
            </form>


            <form action="#" className="form form_signin">
              <h3 className="form_title">Вход</h3>
              <p><input type="text" className="form_input" placeholder="Логин" />
              </p>
              <p>
                <input type="password" className="form_input" placeholder="Пароль" />
              </p>
              <p>
                <button className="form_btn">Войти</button>
              </p>
              <p>
                {/* <a href="" className="form_forgot">Востановить пароль</a> */}
              </p>
            </form>

          </div>

        </article>
      </div>
      {/* {errCheck &&
        <div className="alert alert-danger" role="alert">
          {message}
        </div>
      }
      {sucCheck &&
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      } */}
    </div>

  );
}

export default Registration;
