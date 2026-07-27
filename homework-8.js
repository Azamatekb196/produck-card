
// №3 объект на основе данных

const user = {
  name: 'Vadim',
  surname: 'Vadimovish',
  age: 25,
  country: 'Russia',
  town: 'Volga',
  work: 'developer',
};

// №4 объект который хранит данные об автомобиле

const car = {
  brend: 'Mercedes',
  color: 'black',
  model: 'Benz V-Класс',
  typeEngine: 'diesel',
  displacementEngine: '2.1l',
};

car.owner = user;

console.log(car);
console.log(car.owner.name);

// №5 функция принимает объект описанный в пункте №4. Она проверяет, есть ли в объекте свойство "максимальная скорость", 
// если нет - добавляет его и задает значение, если есть - прекращает выполнение

function checkAndAddMaxSpeed(car) {
  if ('maxSpeed' in car) {
    console.log(car.maxSpeed);
  } else {
    car.maxSpeed = 330;
  }
}

checkAndAddMaxSpeed(car);
console.log(car.maxSpeed);

// №6 функция которая получает первым аргументом — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение

const fruit = {
  color: 'red',
  taste: 'sour',
  form: 'circle'
};

function printProperty(obj, key) {
  console.log(obj[key]);
}

printProperty(fruit, 'color');

// №7  массив

const fruit1 = ['apple', 'pear', 'banana'];
console.log(fruit1);

// №8 массив состоящий из объектов

const bookRandom = [
  { book: 'Fly High', author: 'Kazanoglou Danae', genre: 'Учебные курсы', year: 2017},
  { book: 'Шарлатаны', author: 'Кук Робин', genre: 'Современная зарубежная проза', year: 2023},
  { book: 'FreePublicity.', author: 'Иноземцева Екатерина Сергеевна', genre: 'Блоги и социальные сети', year: 2021}
];

function addBookRandom(list, newBook) {
  list.push(newBook);
}

addBookRandom(bookRandom, {book: 'Завораживающее число Пи', author: 'Делайе Жан-Поль', genre: 'Просто наука', year: 2022});

console.log(bookRandom)



// №9 объединение 2х массивов

const bookProse = [
  {book: 'Госпожа Потусторонья', author: 'Свон Таня', genre: 'Современная отечественная проза', year: 2021},
  {book: 'Корона порока', author: 'Никитина Анастасия', genre: 'Современная отечественная проза', year: 2021},
  {book: 'Шешель и шельма', author: 'Дарья Кузнецова', genre: 'Современная отечественная проза', year: 2021}
];

function mergeBooks(array1, array2) {
  return [...array1, ...array2];
}

const books = mergeBooks(bookRandom, bookProse)


// №10 Добавляем новое свойство для объекта

function addOldBooks (booksList) {
  return booksList.map(book => {
    if (book.year < 2020) {
      book.isOld = 'old';
    }
    return book;
  });
}

const updatedBooks = addOldBooks(books);
console.log(updatedBooks);