
// объект на основе данных

const user = {
  name: 'Vadim',
  surname: 'Vadimovish',
  age: 25,
  country: 'Russia',
  town: 'Volga',
  work: 'developer',
}

// объект который хранит данные об автомобиле и дополнительное свойство - владелец авто

const car = {
  brend: 'Mercedes',
  color: 'black',
  model: 'Benz V-Класс',
  typeEngine: 'diesel',
  displacementEngine: '2.1l',
}

car.owner = user

// console.log(car)
// console.log(car.owner.name)

// функция которая аргументом  принимает объект, проверяет есть ли объект, если есть ничего не делает, если нет то добавляет

function checkMaxSpeed (car) {
  if ('maxSpeed' in car) {
    console.log(car.maxSpeed)
  } else {
    car.maxSpeed = 330
  }
}

checkMaxSpeed (car)
console.log(car.maxSpeed)

// функция получает первым аргументом — объект, а вторым аргументом — свойство объекта и выводит его значение

