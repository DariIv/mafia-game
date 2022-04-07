const mainContainer = document.querySelector('#mainContainer');
const regForm = document.querySelector('#regForm');
const regError = document.querySelector('#regError');
const secretRadio = document.querySelector('#secretRadio');

let count = 0
regForm?.addEventListener('click', (event) => {

  if (event.target.value === 'on') {
    count++;

    if (count % 2 === 1) {
      secretRadio.style.visibility = 'visible';
    } else {
      secretRadio.style.visibility = 'hidden';
    }
  }
});

regForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  // action - /form/reg
  const { method, action, user_name, user_email, user_password, user_secret_word } = event.target;

  const response = await fetch(action, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_name: user_name.value,
      user_email: user_email.value,
      user_password: user_password.value,
      user_secret_word: user_secret_word.value
    }),
  });

  const data = await response.text();

  if (data.includes('error')) {
    regError.innerHTML = data;
  } else {
    mainContainer.innerHTML = data;

    const loginForm = document.querySelector('#loginForm');
    const loginError = document.querySelector('#loginError');

    loginForm?.addEventListener('submit', async (event) => {
      event.preventDefault();

      // action - /form/login
      const { method, action, user_email, user_password } = event.target;

      const response = await fetch(action, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_email: user_email.value,
          user_password: user_password.value,
        }),
      });

      const data = await response.text();

      if (data.includes('error')) {
        loginError.innerHTML = data;
      } else {
        mainContainer.innerHTML = data;
        setTimeout(() => {
          document.location.assign('/');
        }, 2000);
      }
    });
  }
});
