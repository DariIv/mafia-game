const confirmFavorite = document.querySelector('#confirmFavorite');
const mainContainer = document.querySelector('#mainContainer');

mainContainer?.addEventListener('click', async (event) => {
  event.preventDefault();

  if (event.target.innerText.includes('Добавить')) {
    // method - get
    // action - /main/favorite/:bar_id
    const action = event.target.href;

    if (action) {
      const response = await fetch(action);
      const data = await response.text();

      confirmFavorite.innerHTML = data;
      setTimeout(() => {
        confirmFavorite.innerHTML = '';
      }, 1500);
    }
  }
});

const dropMenu = document.querySelector('#dropMenu')

dropMenu?.addEventListener('click', async (event) => {
  event.preventDefault()

  const response = await fetch('/main/drop', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      bar_type: event.target.innerText
    })
  })

  const data = await response.text()
  mainContainer.innerHTML = data
})

