
function showWeather(city, temperatura) {
  console.log(`Сейчас в ${city} температура - ${temperatura} градусов по Цельсию`);
}
showWeather("Москва", 20)


const SPEED_LIGHT = 1079252848.8
function checkSpeed(inputSpeed) {
  if (SPEED_LIGHT < inputSpeed) {
  console.log('Сверхсветовая скорость')
  } else if (SPEED_LIGHT === inputSpeed) {
    console.log('Скорость света')
  } else {
    console.log('Субсветовая скорость')
  }
}
checkSpeed(767)

const product = 'apple'
let price = 23

function buyProduct(money, product, price) {
  if (price <= money) {
    console.log(`${product} приобретён. Спасибо за покупку!`)
  } else {
    console.log(`Вам не хватает ${price - money}$ пополните баланс`)
  }
}
buyProduct(45, 'apple', 23)

// функция конвектор времени
function convertToSeconds(minutes) {
  return minutes * 60
}
console.log(convertToSeconds(5))

