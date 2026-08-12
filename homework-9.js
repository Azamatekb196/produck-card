
// задание 1
import { socialMediaComments } from "./comments.js";

// задание 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getNumbersFromFive (numbers) {
  return numbers.filter(item => item >= 5);
}
const numbersFromFive = getNumbersFromFive(numbers);



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
function getFilteredEmails(items) {
  return items.filter(item => item.email.includes('.com'));
}

const filteredEmails = getFilteredEmails(socialMediaComments);


// задание 8
function getUpdatedPosts(items) {
  return items.map (item => ({
    ...item,
    postId: item.id <= 5 ? 2 : 1
  }));
}

const updatedPosts = getUpdatedPosts(socialMediaComments);



// задание 9
function getIdAndName(users) {
  return users.map(user => {
    return {
      id: user.id,
      name: user.name
    };
  });
}

const idAndName = getIdAndName(socialMediaComments);



// задание 10
function updateUsers(users) {
  return users.map(user => ({
    ...user,
    isInvalid : user.body.length > 180 ? true : false
  }));
}

const getUpdatedUser = updateUsers(socialMediaComments);


// задание 11
function getEmails(users) {
  return users.reduce((accumulator, user) => {
    accumulator.push(user.email);
    return accumulator;
  }, []);
}

const emails = getEmails(socialMediaComments);


function getEmails1(users) {
  return users.map(user => {
    return user.email;
  })
}

const emails1 = getEmails1(socialMediaComments);


// задание 12
function convertToString(array) {
  return array.toString();
}

const stringValue = convertToString(arrayMail);


function convertToString1(array) {
  return array.join();
}

const stringValue1 = convertToString1(arrayMail);
