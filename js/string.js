let academy = "Stringcode Limited";
let username = `mcgamma04`;
let password = "abc12345";

// console.log(academy);
// console.log(username);
// console.log(password);

//length

// console.log(password.length);

let fname = "   emmanuel".trim();
// console.log(fname.length);

function checkPasword(str) {
  str = str.trim();
  if (str.length < 5) {
    return "password must be 5 or  more long";
  }
  return "Success";
}

// console.log(checkPasword("         a"));

//concatenation  is joining/ appending two or more string

function fullName() {
  let firstName = prompt("first name: ");
  let lastName = prompt("lastname: ");

  let fullName = firstName + " " + lastName;
  document.write(fullName);
}

let balance = 45000;
// console.log(`Your balance is ${balance}`);
// console.log('Your balance is '+balance);

let email = "abc@gmail.com";
let name = "Idaye Emmanuel";

let userDetails = `Your name is ${name} with email address ${email}`;
// console.log(userDetails);
// console.log(name.concat(",",email,"!"));

//includes > boolean true or false

// let uEmail = "abcgmail.com";
// console.log(uEmail.includes("@"));

// if (!uEmail.includes("@")) {
//   console.error(`error!,  entered email is invalid`);
// }else{
//     console.log(`success: email is valid`);
// }

let message = "A life without Jesus, Christ is full of crises Christ";
// console.log(message.indexOf("Christ"));
// console.log(message.lastIndexOf("Christ"));

// console.log(message.charAt(5));
// console.log(message[5]);

// transform
// console.log(message.toLowerCase());
// console.log(message.toUpperCase());
// let msg =  message.replace("Christ","God");
// console.log(msg);
let msg =  message.replaceAll("Christ","God");
// console.log(msg);
// console.log(message.startsWith("is"));

// let subMsg = message.substring(13,26).split(",")[0];
let msg2  = message.slice(2,6);
// console.log(msg2);

// console.log(subMsg);

// let ourMessages = message.split(",");
// console.log(ourMessages.join(","));

let lastThree = message.substring(message.length-3);
// console.log(lastThree);
// get last Character
// console.log(message.charAt(message.length -1));

let charCodeAt = message.charCodeAt(0)
// console.log(charCodeAt);

// let pwd = "Ade";
// if(pwd.charCodeAt(0) ===41){
//     console.log("Password is valid");
// }else{
//     console.log("Password is invalid");
// }

// loop
// i love you

// for(let i=1; i<=5; i++){
//   console.log('i love you');
// }

// let i =0;
// while(i<=5){
//   console.log('i love you');
//   i++;
// }

// for(initial; condition;increment/decrement){

// }

// add natural number between 1 to 10;
// 1 + 2+3+4+5..10
// let sum = 0;
// for(let i = 1; i<=10; i++){
//   sum += i;
// }


// console.log(sum);

// add even no betyween 0 to 10
// 2 + 4 + 6 + 8 + 10

// let sum = 0;
// for(let i =0; i<=10; i+=2){
//   sum +=i 
// }
// console.log(sum);
let sum =0;
for(let i=0; i<=10; i++){
  if(i%2===0){
sum+=i;
  }
}

console.log(sum);



