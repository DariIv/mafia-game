const changeForm = document.querySelector('#changeForm')
const addFormContainer = document.querySelector('#addFormContainer');
const profileContainer = document.querySelector('#profileContainer');

// Слушаем кнопку Изменить профиль
changeForm?.addEventListener('submit', async (event) => {
  event.preventDefault()

  const { method, action } = event.target

  const response = await fetch(action)
  const data = await response.text()

  addFormContainer.innerHTML = data
})


// Слушаем кнопку Удалить из избранных
profileContainer?.addEventListener('click', async (event) => {
  event.preventDefault();

  if (event.target.innerText.includes('Удалить')) {

    // method - get
    // action - /profile/delete/:id
    const action = event.target.href;

    if (action) {
      const response = await fetch(action)
      const data = await response.text()

      addFormContainer.innerHTML = data
      
      // Слушаем кнопку Отменить
      const cancelButton = document.querySelector('#cancelButton');
      cancelButton?.addEventListener('click', (event) => {
        addFormContainer.innerHTML = '';
      });

      // Слушаем форму Удаления
      const addForm = document.querySelector('#addForm')
      addForm?.addEventListener('submit', async (event) => {
        event.preventDefault()

        // method - delete
        // action - /profile/delete/:id
        const response = await fetch(action, {
          method: 'delete'
        })
        const data = await response.text()

        profileContainer.innerHTML = data
        addFormContainer.innerHTML = ''
      })
    }
  }
});
