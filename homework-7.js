
function showWeather(city, temperatura) {
  console.log(`Сейчас в ${city} температура - ${temperatura} градусов по Цельсию`);
}
showWeather("Москва", 20)


const speedLight = 1079252848.8
function checkSpeed(inputSpeed) {
  if (speedLight < inputSpeed) {
  console.log('Сверхсветовая скорость')
  } else if (speedLight === inputSpeed) {
    console.log('Скорость света')
  } else {
    console.log('Субсветовая скорость')
  }
}
checkSpeed(767)

const product = 'apple'
let price = 23

function budget(money) {
  if (price <= money) {
    console.log(`${product} приобретён. Спасибо за покупку!`)
  } else {
    console.log(`Вам не хватает ${price - money}$ пополните баланс`)
  }
}
budget(10)

// функция конвектор времени
function convertToSeconds(minutes) {
  return minutes * 60
}
console.log(convertToSeconds(5))

