/* /index */

const burguer = document.querySelector('#burguer')
const menu    = document.querySelector('#menu')

// Toggle menu
if (burguer && menu)
  burguer.addEventListener('click', () => {
    menu.classList.toggle('hidden')
  })
