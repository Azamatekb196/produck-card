
// №3 объект на основе данных

const user = {
  name: 'Vadim',
  surname: 'Vadimovish',
  age: 25,
  country: 'Russia',
  town: 'Volga',
  work: 'developer',
}

// №4 объект который хранит данные об автомобиле

const car = {
  brend: 'Mercedes',
  color: 'black',
  model: 'Benz V-Класс',
  typeEngine: 'diesel',
  displacementEngine: '2.1l',
}

car.owner = user

console.log(car)
console.log(car.owner.name)

// №5 функция принимает объект описанный в пункте №4. Она проверяет, есть ли в объекте свойство "максимальная скорость", 
// если нет - добавляет его и задает значение, если есть - прекращает выполнение

function checkMaxSpeed (car) {
  if ('maxSpeed' in car) {
    console.log(car.maxSpeed)
  } else {
    car.maxSpeed = 330
  }
}

checkMaxSpeed (car)
console.log(car.maxSpeed)

// №6 функция которая получает первым аргументом — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение

const fruit = {
  color: 'red',
  taste: 'sour',
  form: 'circle'
}

function printProperty (obj, key) {
  console.log(obj[key])
}

printProperty(fruit, 'color')

// №7  массив

const fruit1 = ['apple', 'pear', 'banana']
console.log(fruit1)

// №8 массив состоящий из объектов

const bookRandome = [
  { book: 'Fly High', author: 'Kazanoglou Danae', genre: 'Учебные курсы', year: 2017},
  { book: 'Шарлатаны', author: 'Кук Робин', genre: 'Современная зарубежная проза', year: 2023},
  { book: 'FreePublicity.', author: 'Иноземцева Екатерина Сергеевна', genre: 'Блоги и социальные сети', year: 2021}
]

bookRandome.push({book: 'Завораживающее число Пи', author: 'Делайе Жан-Поль', genre: 'Просто наука', year: 2022})
console.log(bookRandome)

// №9 объединение 2х массивов

const bookProse = [
  {book: 'Госпожа Потусторонья', author: 'Свон Таня', genre: 'Современная отечественная проза', year: 2021},
  {book: 'Корона порока', author: 'Никитина Анастасия', genre: 'Современная отечественная проза', year: 2021},
  {book: 'Шешель и шельма', author: 'Дарья Кузнецова', genre: 'Современная отечественная проза', year: 2021}
]

const books = [...bookRandome, ...bookProse]
console.log(books)

// №10 Добавляем новое свойство для объекта

const addProperty = books.map(key => {
  if (key.year < 2020) {
    key.isOld = 'old'
    return key
  } else {
    return key
  }
})

console.log(addProperty)