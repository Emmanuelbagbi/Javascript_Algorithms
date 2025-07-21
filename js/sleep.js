// The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation.
// We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

// Examples

// sleepIn(true, true) → true
// sleepIn(true, false) → false
// sleepIn(false, true) → true

function sleepIn(weekday, vacation) {
  return !weekday || vacation;
}

// console.log(sleepIn(true, false));

// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate
// if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling.
// Return true if we are in trouble.

// Examples

// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false

function monkeyTrouble(aSmile, bSmile) {
  return aSmile === bSmile;
}

// Given two int values, return their sum. Unless the two values are the same, then return double their sum.

// Examples

// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8

function sumDouble(a, b) {
  if (a === b) {
    return addition(a, b) * 2;
  }
  return addition(a, b);
}

function addition(a, b) {
  return a + b;
}

// Given an int n, return the absolute difference between n and 21,
// except return double the absolute difference if n is over 21.

// Examples

// diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0
function diff21(n) {
  let diff = Math.abs(n - 21);

  if (n > 21) {
    return diff * 2;
  }
  return diff;
}

let num = 64;
// let sq =  Math.pow(num,3);
let sq = Math.sqrt(num);
// console.log(sq);

let n1 = -560;
// console.log(Math.abs(n1));

// We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23.
//  We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.

// Examples

// parrotTrouble(true, 6) → true
// parrotTrouble(true, 7) → false
// parrotTrouble(false, 6) → false

function parrotTrouble(talking, hour) {
  if (talking && (hour < 7 || hour > 20)) {
    return true;
  }

  return false;
}

// Given 2 ints, a and b, return true if one of them is 10 or if their sum is 10.

// Examples

// makes10(9, 10) → true
// makes10(9, 9) → false
// makes10(1, 9) → true

function makes10(a, b) {
  let sum = a + b;
  return sum === 10 || a === 10 || b === 10;
}

// Given an int n, return true if it is within 10 of 100 or 200.
// Note: Math.abs(num) computes the absolute value of a number.

// Examples

// nearHundred(93) → true
// nearHundred(90) → true
// nearHundred(89) → false

function nearHundred(n) {
  return Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10;
}

// Given 2 int values, return true if one is negative and one is positive.
// Except if the parameter "negative" is true, then return true only if both are negative.

// Examples

// posNeg(1, -1, false) → true
// posNeg(-1, 1, false) → true
// posNeg(-4, -5, true) → true

function posNeg(a, b, negative) {
  if (negative) {
    return a < 0 && b < 0;
  }
  return (a < 0 && b >= 0) || (a > 0 && b < 0);
}

// Given a string, return a new string where "not " has been added to the front.
// However, if the string already begins with "not", return the string unchanged.

// Examples

// notString('candy') → not candy
// notString('x') → not x
// notString('not bad') → not bad

function notString(str) {
  if (str.startsWith("not")) {
    return str;
  }
  return "not" + str;
}
