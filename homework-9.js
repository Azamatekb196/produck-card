// уровень 1
// задание 1

import { socialMediaComments } from "./comments.js";

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

const reversedItems2 = reverseArray(numbers)
console.log(numbers)

const reversedItems1 = reverseArray(warehouse)
console.log(reversedItems1)


// уровень 2
// задание 5

function filteredEmail(items) {
  return items.filter(item => item.email.includes('.com'))
}

const js = filteredEmail(socialMediaComments);
console.log(js)

function assignPostIdsByUserId(items) {
  return items.map (item =>{
    if(item.id <= 5) {
      return {
        ...item,
        postId: 2
      }
    } else {
      return {
        ...item,
        postId: 1
      }
    }
  })
}

const postId = assignPostIdsByUserId(socialMediaComments)
console.log(postId)