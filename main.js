const productCard = document.querySelector('.card');

const changeColorCardButton = document.querySelector('#change-color-card-button')

changeColorCardButton.addEventListener('click', () => {
  productCard.style.backgroundColor = '#0000FF';
})