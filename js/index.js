// alert("This is good");

// variable, let, const, var
//data types in javascript: number,string, object, null, undefined,boolean

let username  = "becky2020";
document.write(`<p>Hello ${username}</p>`);
console.log(`Hello ${username}`);
//how to know the data types 
console.log(typeof username);

let age = 80;
console.log(typeof age);

let isLoggedIn =  false;
console.log(typeof isLoggedIn);

let payment;
console.log(typeof payment);

let unkown = null;
console.log(typeof unkown);

let users = [];
console.log(typeof users);

let min_salary = 60000;
min_salary = 65000;
console.log(min_salary);

const bonus = 45300;
// bonus = 400;
console.log(bonus);

console.log(2+"2");

let firstName = "Adebayo";
let lastName = "Michael";

let fullName = firstName +" "+lastName;
console.log(fullName);

//logicqal operators: && And, || OR, ! NOt,
let email = "emma@gmail.com";
let password = "12345";
if(email==="emma@gmail.com" && password==="12345"){
    //redirect to home.html
    console.log("congratulation, you have logged successfully");
}else{
    console.error("Wrong username or password combination");
}

