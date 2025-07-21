/*
1. /abc/  matches the string "abc"
2. "." matches any single character except newline
3. "^" matches the beginning of a string
4. "$" matches the end of a string
5. "*" matches zero or more repetitions of the preceding element b* => b, bb, bbb,bbbbb, bbbbb
6. "+" matches one or more repetitions of the preceding element b+ => bb, bbb,
7. "?" matches zero or one repetition of the preceding element b? => b, bb
8. {n} matches exactly n repetitions of the preceding element b{2} => bb
9. {n,} matches n or more repetitions of the preceding element b{2,}
10. {n,m} matches at least n and at most m repetitions of the preceding element b
11. [abc] matches a or b or c
12. [^abc] matches any character except a or b or c
13. [a-z] matches any lowercase letter
14. [^a-z] matches any character except lowercase letters
15. [a-z0-9] matches any lowercase letter or digit  
16. [^a-z0-9] matches any character except lowercase letters or digits
17. [a-z0-9_] matches any lowercase letter or digit or underscore
18. [^a-z0-9_] matches any character except lowercase letters or digits or underscore
`\D` 
a|b matches either a or b

*/

function findStringInSentence(str) {
  const checkString = /mike/;
  console.log(checkString.test(str));
}

// findStringInSentence("There is this guy called mike that loves to lean coding. ")

function fullName(str) {
  const isNameValid = /\d+/;
  const restult = isNameValid.test(str);
  if (restult) {
    console.log("Invalid name");
  } else {
    console.log("Valid name");
  }
}

// fullName("Daniel 5Kelvin")

function onlyNumber(str) {
  const isNumber = /^\d+$/;
  return isNumber.test(str);
}
// console.log(onlyNumber(1234566));
// console.log(onlyNumber("1234566abc"));

function extractNumbers(str) {
  const extractOnlyNumbers = /\d+/g;
  return str.match(extractOnlyNumbers);
}

// console.log(extractNumbers("i have 2 girl friends and 5 boys friend 6 profes78sors"));
// benzen@gmail.com
const validEmail = (email) => {
  const reqex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return reqex.test(email);
};

// const isValid = validEmail("daniel@gmail.co");
// if (isValid) {
//   console.log("Email is valid");
// } else {
//   console.log("Email is not valid");
// }

const extractDate = (str) => {
  const regex = /\b\d{4}-\d{2}-\d{2}\b/;

  const match = str.match(regex);
  return match ? match[0] : null;
};

// console.log(extractDate("Today's date is 2024-31-07"));

const accountNumber = (number) => {
  const regex = /^\d{10}$/;
  return regex.test(number);
};

const isAccountValid  = accountNumber("a021225518");
if(isAccountValid){
    console.log('You account is valid');
}else{
    console.log('Your account is not valid');
}
