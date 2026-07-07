

const productCard = document.querySelector('.card');
const changeColorCardButton = document.querySelector('#change-color-card-button')
const colorHashGreen = 'rgb(208, 255, 0)'

changeColorCardButton.addEventListener('click', () => {
  productCard.style.backgroundColor = colorHashGreen;
})



const changeColorAllCardsButton = document.querySelector('#change-color-cards-button')
const allProductCards = document.querySelectorAll('.card');
const colorHashTurquoise = 'hsl(155, 100%, 50%)'

changeColorAllCardsButton.addEventListener('click', () => {
  allProductCards.forEach((card) => card.style.backgroundColor = colorHashTurquoise)
})


const openGoogleButton = document.querySelector('#open-google')
const googleUrl = 'https://google.com'

openGoogleButton.addEventListener('click', (googleUrl))

function openGoogle() {
  const answer = window.confirm('вы действительно хотите открыть Google')

  if(answer === true) {
    window.open(googleUrl)
  }
}


