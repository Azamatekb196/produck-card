
// №3

const user = {
  name: 'Vadim',
  surname: 'Vadimovish',
  age: 25,
  country: 'Russia',
  town: 'Volga',
  work: 'developer',
}

// №4

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

// №5

function checkMaxSpeed (car) {
  if ('maxSpeed' in car) {
    console.log(car.maxSpeed)
  } else {
    car.maxSpeed = 330
  }
}

checkMaxSpeed (car)
console.log(car.maxSpeed)

// №6
const fruit = {
  color: 'red',
  taste: 'sour',
  form: 'circle'
}

function printPropertry (obj, key) {
  console.log(obj[key])
}

printPropertry(fruit, 'color')

// №7 

const fruit1 = ['apple', 'pear', 'banana']
console.log(fruit1)

// №8

const bookRandome = [
  { book: 'Fly High', author: 'Kazanoglou Danae', genre: 'Учебные курсы', year: 2017},
  { book: 'Шарлатаны', author: 'Кук Робин', genre: 'Современная зарубежная проза', year: 2023},
  { book: 'FreePublicity.', author: 'Иноземцева Екатерина Сергеевна', genre: 'Блоги и социальные сети', year: 2021}
]

bookRandome.push({book: 'Завораживающее число Пи', author: 'Делайе Жан-Поль', genre: 'Просто наука', year: 2022})
console.log(bookRandome)

// №9 

const bookProse = [
  {book: 'Госпожа Потусторонья', author: 'Свон Таня', genre: 'Современная отечественная проза', year: 2021},
  {book: 'Корона порока', author: 'Никитина Анастасия', genre: 'Современная отечественная проза', year: 2021},
  {book: 'Шешель и шельма', author: 'Дарья Кузнецова', genre: 'Современная отечественная проза', year: 2021}
]

const books = [...bookRandome, ...bookProse]
console.log(books)

// №10

const addProperty = books.map(key => {
  if (key.year < 2020) {
    key.isOld = 'old'
    return key
  } else {
    return key
  }
})

console.log(addProperty)