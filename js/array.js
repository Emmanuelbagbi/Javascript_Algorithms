const students = ["Emmanuel", "Daniel", "Benzon", "Korede", "Restorer"];

students[200] = "Tinubu";
// console.log(students.length);
// console.log(students[102]);

// console.log(typeof students);

// length
let size = students.length;
// console.log(`Length: ${size}`);
// access item in arra

let first = students[0];
// let second = students[1];
// let third = students[2];

// console.log(`First: ${first}`);
let last = students[size - 1];
// console.log(last);

// for(let i=0; i<size; i++){
//     console.log(`${i}: ${students[i]}`);
// }

// for(let student of students){
//     if(student==="Korede"){
//         break;
//      }else{
//          console.log(`${student}`);
//      }
// }

students.forEach((student, index) => {
  // if(student==="Daniel"){
  //    break;
  // }else{
  //     console.log(`${index}: ${student}`);
  // }
  // console.log(`${index}: ${student}`);
});

students.push("Michael");
// remove last element from array
let removedItem = students.pop();
// console.log(removedItem);
// console.log(students);

//append to the begining of an array
students.unshift("Excellent");
//remove first element in array
let removedFirst = students.shift();
// console.log(removedFirst);

let mediumPrices = [23, 67, 34, 90, 12];
let higherPrices = [4500, 2300];
// combined

const allPrices = mediumPrices.concat(higherPrices);
// console.log(allPrices);
//spread to concate
const allPrices2 = [...mediumPrices, ...higherPrices];
// console.log(allPrices2);

const student2s = ["Emmanuel", "Daniel", "Benzon", "Korede", "Restorer"];

// console.log(student2s.sort((a,b)=>b-a));
// let sortAlh = student2s.sort();
// console.log(sortAlh.reverse());

// student2s.sort((a, b) => {
//   if (a > b) return -1;

//   if (a < b) return 1;
//   return 0
// });
// console.log(student2s);

student2s.sort((a, b) => b.localeCompare(a));
// console.log(student2s);

// splice
// let removedItem2 = student2s.splice(2,2);

// add to array elements
student2s.splice(1, 0, "Dauda");
// console.log(student2s);

let num = [2, 1, 5, 6, 8]; //unique array
// console.log(num.indexOf(5));

// num[3]= 10;
// console.log(num);

function check5andInsert10(arr, target, newValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(target)) {
      //    console.log("love");
      arr.splice(arr.indexOf(target) + 1, 0, newValue);
      break;
    } else {
      return "target not found";
    }
  }
  return arr;
  // console.log();
}

// let array = [45,90,200,300];
// let target = 301;
// let newValue = 20;
// console.log(check5andInsert10(array,target,newValue));

// let sort;

// function compare(a,b){
//     if(a>b){
//         return a,b;
//     }else if(a < b){
//         return b,a;
//     }
//     else{
//         return
//     }
// }

let numbers = [1, 3, 2, 5, 4, 7, 6]; //=>3,1
// let sort = numbers.sort();
// console.log(sort);
// sort descending order
// let sort2 = numbers.sort((a, b) => b - a);
// console.log(sort2);

// console.log(numbers.reverse());

// Copy
let copy = numbers.slice(3, 6);
// console.log(copy[0]);

const fruits = ["mango", "apple", "lemon", "grape", "banana"];
// console.log(fruits[3]);

//loop
// for(let i=0; i<fruits.length; i++){
//   console.log(fruits[i]);
// }

// for(let fruit of fruits){
//   console.log(fruit);
// }

// fruits.forEach((fruit,index)=>{
//   console.log(fruit);
// })

//multi dimesional

// 1   2   3   4   5
// 2   4   6   8   10
// 3   6   9   12  15
// 4   8   12  16  20
// 5   10  15  20  55

// for (let i = 1; i <= 5; i++) {
//   let tableRow = "";
//   console.log(i);
//   for (let j = 1; j <= 5; j++) {
//     tableRow += `${i * j}\t`;
//     console.log(j);
//   }
//   console.table(tableRow);
// }

// for (let i = 0; i <= 4; i++) {
//   console.log("i love you from outer loop " + i);
//   for(let j=1; j<=10; j++){
//     console.log("message from inner loop "+j);
//   }
// }

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// console.log(matrix[0][2]);
// console.log(matrix[2][2]);

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     // console.log(matrix[i][j]);
//     if (matrix[i][j] === 9) {
//       matrix[i][j] = 90;
//     }
//     console.log(matrix[i][j]);
//   }
// }

// *
// * *
// * * *
// * * * *
// * * * * *

// let n=5;
// for(let i=1; i<=n; i++){
//   let tableRow = "";
//   for(let j=1; j<=i; j++){
//  tableRow += "* ";
// }
// console.log(tableRow);
// }

// let A = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let B = [
//   [10, 20, 30],
//   [40, 50, 60],
//   [70, 80, 90],
// ];

// // A+B
// let ans = [];
// for (let i = 0; i < A.length; i++) {
//   let row = [];
//   for (let j = 0; j < A[i].length; j++) {
//     row.push(A[i][j] + B[i][j]);
// }
// ans.push(row);
// }
// console.log(ans);

const friends = ["tayo", "niyi", "bimbo"];

friends[2] = "Uche";
// console.log(friends);
// modifying an array
let arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

arr2[2][0] = 700;
arr2[1][2] = 600;

// console.log(arr2);

// console.log(arr2[1][1]);

const phones = [];

phones[0] = "samsumg";
phones[2] = "Tekno";
phones[3] = "nokia";

// console.log(phones.length);
// console.log(phones);

// for (let i = 0; i < phones.length; i++) {
//   if (phones[i] !== undefined) {
//     console.log(phones[i]);
//   }
// }

// initailise it
// let  rows = 3;
// let cols = 3;
// let arr3 = [];
// for (let i = 0; i < rows; i++) {
//   let row = [];
//   for (let j = 0; j < cols; j++) {

//   }
//   }

let rows = 3;
let cols = 3;
let arr = [];

for (let i = 0; i < rows; i++) {
  arr[i] = [];
  for (let j = 0; j < cols; j++) {
    arr[i][j] = 0;
  }
}

// console.log(arr);

function arrProduct(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      product *= i;
    }
  }
  return product;
}

console.log(arrProduct([4, 40, 10, 20]));
