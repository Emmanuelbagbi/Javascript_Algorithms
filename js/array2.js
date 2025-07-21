// higher order function js

let numbers = [1, 2, 3, 4, 5];
// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

// numbers.forEach((number, index)=>{
//     console.log(number)
// })
// Map()

let squares = numbers.map((number) => Math.pow(number, 2));
// console.log(squares);
let students = ["Emmanuel", "Chidera"];

let toUpper = students.map((student) => student.toUpperCase());
// console.log(toUpper);

//APPENDING character.
//*
let products = ["fanta", "coke", "lemon"];
let appendStart = products.map((product) => product + "*");

// console.log(appendStart);

const newNumbers = ["2", "6", "10"];
let numberOnly = newNumbers.map((number) => parseInt(number));

// console.log(typeof numberOnly[0]);

//filter

const numbers3 = [1, 2, 3, 4, 5, 6, 7];
let evenOnly = numbers3
  .filter((number) => number % 2 === 0)
  .filter((number) => number > 4);
// console.log(evenOnly);

const words = ["hi", "ade", "Bose", "American"];

let moreThan4 = words.filter((word)=>word.length >4);
// console.log(moreThan4);


// Array-2 -- fizzArray
// Given a number n, create and return a new array of length n, containing 
// the numbers 0, 1, 2, ... n-1. The given n may be 0, in 
// which case just return a length 0 array. You do not need a separate 
// if-statement for the length-0 case; the for-loop should naturally 
// execute 0 times in that case, so it just works. The syntax to make a new array is let myArray = [];

// Examples

// fizzArray(4) → 0,1,2,3
// fizzArray(1) → 0
// fizzArray(10) → 0,1,2,3,4,5,6,7,8,9

function fizzArray(n){
    let result = [];
    for(let i=0; i<n; i++){
        result.push(i);
    }

    return result;

}

console.log(fizzArray(4));