import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  </React.StrictMode>
);

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.


// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });


//in arrow function


// const newNumber = numbers.map(x => x*2);


//////Filter - Create a new array by keeping the items that return true.


// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });


//in arrow function


// const newNumber = numbers.filter(x => x<10)


//Reduce - Accumulate a value by doing something to each item in an array.


// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })


//in arrow fuction


// var newNumber = numbers.reduce((acc,curr)=>{
//   return acc+curr;
// })


////Find - find the first item that matches from an array.


// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })


//arrow function


// const newNumber = numbers.find(num => num > 10)


////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })


//arrow funtion


// const newNumber = numbers.findIndex(num => num > 10)