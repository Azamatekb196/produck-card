
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

const hasElement = warehouse.includes('Телефон');



// задание 4
function reverseArray(array) {
  array.reverse();
}

reverseArray(numbers);

reverseArray(warehouse);



// задание 7
function filteredEmail(items) {
  return items.filter(item => item.email.includes('.com'));
}

const filteredItems = filteredEmail(socialMediaComments);


// задание 8
function assignPostIdsByUserId(items) {
  return items.map (item => ({
    ...item,
    postId: item.id <= 5 ? 2 : 1
  }));
}

const postId = assignPostIdsByUserId(socialMediaComments);



// задание 9
function selectUser(users) {
  return users.map(user => {
    return {
      id: user.id,
      name: user.name
    };
  });
}

const idAndName = selectUser(socialMediaComments);



// задание 10
function addPropertyUser(users) {
  return users.map(user => ({
    ...user,
    isInvalid : user.body.length > 180 ? true : false
  }));
}

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
