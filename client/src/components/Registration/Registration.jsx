import React from 'react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUserAc } from '../../redux/actionCreators/usersAC'
import './Registation.css'

function Registration(props) {

  // const switchers = [...document.querySelectorAll('.switcher')]

  // switchers.forEach(item => {
  //   item.addEventListener('click', function () {
  //     switchers.forEach(item => item.parentElement.classList.remove('is-active'))
  //     this.parentElement.classList.add('is-active')
  //   })
  // })

  const navigate = useNavigate()
  const dispatch = useDispatch()


  //рега
  const loginValue = useRef()
  const emailValue = useRef()
  const passwordValue = useRef()

  // логин
  const valueEmail = useRef()
  const valuePassword = useRef()

  const [errCheck, setErrCheck] = useState(false)
  const [message, setMessage] = useState()
  const [sucCheck, setSucCheck] = useState(false)


  // рега

  const addUser = (event) => {
    event.preventDefault()

    const newUser = {
      user_name: loginValue.current.value,
      user_email: emailValue.current.value,
      user_password: passwordValue.current.value
    }
    // console.log('qwe');
    fetch('http://localhost:4000/registration', {
      credentials: 'include',
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())

      .then(data => {
        console.log(data);
        // console.log(data);
        if (data.status === 400) {
          setMessage(data.message)
          setErrCheck(true)
        }
        if (data.status === 200) {
          setMessage(data.message)
          setErrCheck(false)
          setSucCheck(true)
          // console.log('привет рег');
          // dispatch(addUserAc(data));
          // localStorage.setItem('user_name', data.name)
          setTimeout(() => {
            window.location.href = 'http://localhost:4000/'
            // navigate('/profile')
          }, 1000)
        }
      })
    // .then(data => dispatch(addUserAc(data)))
  }


  // логин

  const getUser = (event) => {
    event.preventDefault()

    const userChek = {
      user_email: valueEmail.current.value,
      user_password: valuePassword.current.value
    }
    
    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(userChek)
    })
      .then(res => res.json())

      .then(data => {
        console.log(data);
        if (data.status === 400) {
          console.log(message.status);
          setMessage(data.message)
          setErrCheck(false)
        }
        if (data.status === 200) {
          setMessage(data.message)
          setErrCheck(false)
          setSucCheck(true)
          dispatch(addUserAc(data));
          console.log('привет лог');
          localStorage.setItem('user_name', data.name)
          setTimeout(() => {
            navigate('/profile')
          }, 1000)
        }
      })
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



  const classes = []

  // const [state, setState] = useState(true)
  // const [state1, setState1] = useState(false)

  // var state = true;
  // var state1 = false

  const [cl, setCl] = useState('form-wrapper is-active')
  const [cl1, setCl1] = useState('form-wrapper')

  function sss(context) {

    let curstr = context.target.className

    if (curstr === 'switcher switcher-signup') {
      //  state = false
      //  state1 = true
      setCl('form-wrapper')
      setCl1('form-wrapper is-active')
    } else {
      // state = true
      // state1 = false
      setCl('form-wrapper is-active')
      setCl1('form-wrapper')
    }

    // switcher switcher-signup
    // switcher switcher-login

    // state = !state;
    // state1 = !state1;

    // console.log(state, state1);

    // state === true ? setCl('form-wrapper is-active') : setCl('form-wrapper')
    // state1 === true ? setCl1('form-wrapper is-active') : setCl1('form-wrapper')


    console.log(classes.join(' '))

    // console.log(context.target.className);
  }


  // const sss = () => {


  //   // setState(!state)
  //   // console.log(state);
  //   // setState1(!state1)
  //   // console.log(state1);

  //   state = !state;
  //   state1 = !state1;

  //   console.log(state,state1);

  //   state === true ? setCl('form-wrapper is-active') : setCl('form-wrapper')
  //   state1 === true ? setCl1('form-wrapper is-active') : setCl1('form-wrapper')
  //   console.log(classes.join(' '))

  // }


  //  console.log(sss());

  return (
    <section className="forms-section">
      <div>
      <h1 className="section-title">РЕГИСТРАЦИЯ</h1>
      <div className="forms">
        <div className={cl}>
          <button type="button" onClick={sss} className="switcher switcher-login">
            ВХОД
            <span className="underline"></span>
          </button>
          <form className="form form-login" onSubmit={getUser}>
            <fieldset>
              <legend>Пожалуйста, введите логин и пароль.</legend>
              <div className="input-block">
                <label htmlFor="login-email">ПОЧТА</label>
                <input ref={valueEmail} id="login-email" type="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="login-password">ПАРОЛЬ</label>
                <input ref={valuePassword} id="login-password" type="password" required />
              </div>
            </fieldset>
            <button type="submit" className="btn-login">НАЧАТЬ</button>
          </form>
        </div>
        <div className={cl1}>
          <button type="button" onClick={sss} className="switcher switcher-signup">
            РЕГИСТРАЦИЯ
            <span className="underline"></span>
          </button>
          <form className="form form-signup" onSubmit={addUser}>
            <fieldset>
              <legend>Please, enter your email, password and password confirmation htmlFor sign up.</legend>
              <div className="input-block">
                <label htmlFor="signup-login">ИМЯ</label>
                <input ref={loginValue} id="signup-login" type="login" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-email">ПОЧТА</label>
                <input ref={emailValue} const emailValue id="signup-email" type="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password">ПАРОЛЬ</label>
                <input ref={passwordValue} id="signup-password" type="password" required />
              </div>
            </fieldset>
            <button type="submit" className="btn-signup">ПРОДОЛЖИТЬ</button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Registration;
