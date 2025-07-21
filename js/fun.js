// let username = prompt("enter your name");
// if (username.length < 3) {
//   alert("username must be at least 3 characters");
// } else {
//   alert("Login successful!");
// }

function message() {
  alert("Nothing is free not even in freetown");
}

function login() {
  let username = prompt("enter your name");
  if (username.length < 3) {
    alert("username must be at least 3 characters");
  } else {
    alert("Login successful!");
  }
}

//function with paraters

function addition(num1, num2) {
  let sum = num1 + num2;
  console.log(`Sum = ${sum}`);
}

// addition(12,90);
// addition(56,41);
// addition(167,42);
// addition(12,45);

const userAge = function checkAge(age) {
  if (age < 18) {
    console.log(
      `Access denied: Reason, Sorry you are not allowed to use this app because you are less than 18 years`
    );
  } else {
    console.log(`Access granted!`);
  }
};

// userAge(78)

//arrow head

const info = () => {
  console.log(`This is awesome!`);
};

// info();
// addTwo(5, 7);

const addTwo = (a, b) => {
  let sum = a + b;
  console.log(`${a} + ${b} = ${sum}`);
};

// nga()

function nga() {
  console.log(`This is nigeria`);
}

// return statement

function multiplyNumber(a, b) {
  return a * b;
  //    console.log(`this is good`);
}

// console.log(multiplyNumber(4,7));

function checkBal(amount) {
  if (amount > 10000000) {
    return `Your balance is ${amount} and it is above 10 million`;
  } else if (amount > 7000000 && amount < 10000000) {
    return `Your balance is ${amount} and it is above 7 million but less than 10 million`;
  } else {
    return `Your balance is ${amount} and it is less than 7 million`;
  }
}

// console.log(checkBal(4_000_000));

// scope ofm a variable

function fathers() {
  let day_date = `Usually every 15th of june there is always a father's day celebration`;
}

// console.log(day_date);
// default paramerter

function getUserState(state = "Lagos") {
  console.log(`You are from ${state}`);
}

// getUserState("Imo");

// rest operators
function addAll(...numbers) {}

// anonymous

// setInterval(function () {
//   console.log("Hello world");
// }, 1000);

function delay() {
  console.log(`this is my first message`);
}
// setTimeout(delay, 1000)
// console.log(`I love it`);

//IIFE
// (function () {
//   console.log(`IIFE is working`);
// })();

//HIGHER ORDER function

function Operate(operator, a, b) {
  return operator(a, b);
}

function additn(x, y) {
  return x + y;
}

function substract(u, v) {
  return u - v;
}

const ans = Operate(additn, 10, 4);
const ans2 = Operate(substract, 10, 4);
// console.log(ans);
// console.log(ans2);

const Mathemartics = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  division: function (a, b) {
    if (b === 0) {
      return "Division by zero is not allowed";
    }
    return a / b;
  },
};

// console.log(Mathemartics.add(3,5));
// console.log(Mathemartics.subtract(3,5));
// console.log(Mathemartics.multiply(23,3));
console.log(Mathemartics.division(12,2));

