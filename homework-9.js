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
// console.log(numbers)

const reversedItems1 = reverseArray(warehouse)
// console.log(reversedItems1)


// уровень 2

// задание 7

function filteredEmail(items) {
  return items.filter(item => item.email.includes('.com'))
}

const js = filteredEmail(socialMediaComments);
// console.log(js)


// задание 8

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
// console.log(postId)


// задание 9
function shortUsers(users) {
  return users.map(user => {
    return {
      id: user.id,
      name: user.name
    }
  })
}

const getShortUser = shortUsers(socialMediaComments)
// console.log(getShortUser)



// задание 10
function addPropertyUser(users) {
  return users.map(user => {
    if (user.body.length > 180) {
      return {
        ...user,
        isInvalid: true
      }
    } else {
      return {
        ...user,
        isInvalid: false
      }
    }
  })
}

const getNewProperty = addPropertyUser(socialMediaComments)
// console.log(getNewProperty)


// задание 11

function addArrayMail(users) {
  return users.reduce((accumulator, user) => {
    accumulator.push(user.email);
    return accumulator;
  }, [])
}

const arrayMail = addArrayMail(socialMediaComments)
// console.log(arrayMail)

function addArrayMail1(users) {
  return users.map(user => {
    return user.email
  })
}

const arraeMail1 = addArrayMail1(socialMediaComments)
// console.log(arraeMail1)

// задание 12

function arrayToString(array) {
  return array.toString()
}

const arrayString = arrayToString(arrayMail)
console.log(arrayString)