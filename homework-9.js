
// задание 1
import { socialMediaComments } from "./comments.js";

// задание 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getNumberFromFive (numbers) {
  return numbers.filter(item => item >= 5);
}
const numberFromFive = getNumberFromFive(numbers);



// задание 3
const warehouse = ['Ноутбук', 'Мышь', 'Телефон', 'Чехол'];

const productExists = warehouse.includes('Телефон');


// задание 4
function reverseArray(array) {
  return array.reverse();
}

const reversedItems2 = reverseArray(numbers);


const reversedItems1 = reverseArray(warehouse);



// задание 7
function filteredEmail(items) {
  return items.filter(item => item.email.includes('.com'));
}

const js = filteredEmail(socialMediaComments);



// задание 8
function assignPostIdsByUserId(items) {
  return items.map (item => {
    if(item.id <= 5) {
      return {
        ...item,
        postId: 2
      };
    } else {
      return {
        ...item,
        postId: 1
      };
    }
  })
}

const postId = assignPostIdsByUserId(socialMediaComments);



// задание 9
function shortUsers(users) {
  return users.map(user => {
    return {
      id: user.id,
      name: user.name
    };
  });
}

const getShortUser = shortUsers(socialMediaComments);



// задание 10
function addPropertyUser(users) {
  return users.map(user => {
    if (user.body.length > 180) {
      return {
        ...user,
        isInvalid: true
      };
    } else {
      return {
        ...user,
        isInvalid: false
      };
    }
  })
};

const getNewProperty = addPropertyUser(socialMediaComments);


// задание 11
function addArrayMail(users) {
  return users.reduce((accumulator, user) => {
    accumulator.push(user.email);
    return accumulator;
  }, []);
}

const arrayMail = addArrayMail(socialMediaComments);


function addArrayMail1(users) {
  return users.map(user => {
    return user.email;
  })
}

const arraeMail1 = addArrayMail1(socialMediaComments);


// задание 12
function arrayToString(array) {
  return array.toString();
}

const arrayString = arrayToString(arrayMail);


function arrayToString1(array) {
  return array.join();
}

const array1 = arrayToString1(arrayMail);
