//reduce

function sumAll(arr) {
  let sum = 0;
  for (let no of arr) {
    sum += no;
  }
  return sum;
}

// console.log(sumAll([2,3,5,6,8,9]));

const prices = [23, 4, 67, 6700, 12, 45];
const total = prices.reduce((acc, curVal) => acc + curVal, 0);
// console.log(total);

const getMax = prices.reduce((max, num) => (num > max ? num : max), prices[0]);
// console.log(getMax);

function obtainMax(arr) {
  let max = arr[0];
  for (let higher of arr) {
    if (higher > max) {
      max = higher;
    }
  }
  return max;
}

// console.log(obtainMax(prices));

const nestedArray = [
  ["Orange", "Banana"],
  ["Lemon", "grape"],
  ["biology", "chemistry"],
];

const flarArray = nestedArray.reduce((acc, curVal) => acc.concat(curVal), []);
// console.log(flarArray);

// count occurence
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]; // banana:2, apple:2

const each_total = fruits.reduce((acc, curFruits) => {
  acc[curFruits] = (acc[curFruits] || 0) + 1;
  return acc;
}, {});

console.log(each_total);
//
const itemNos = [1, 3, 4, 3, 3, 6, 7, 4, 6];

const dupicateRemove = itemNos.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);

function removeDupl(arr) {
  let newArr = [];
  for (let num of arr) {
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  }
  return newArr;
}
console.log(removeDupl(itemNos));
