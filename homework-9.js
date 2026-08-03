// уровень 1

// задание 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function getNumberFromFive (numbers) {
  return numbers.filter(item => item >= 5)
}
const numberFromFive = getNumberFromFive(numbers)
// console.log(numberFromFive)



// задание 3
const warehouse = ['Ноутбук', 'Мышь', 'Телефон', 'Чехол'];

const productExists = warehouse.includes('Телефон')
// console.log(productExists)

// задание 4

function reverseArray(array) {
  return array.reverse()
}
const reversedItems1 = reverseArray(warehouse)
console.log(reversedItems1)

const reversedItems2 = reverseArray(numbers)
console.log(numbers)

// уровень 2
// задание 5