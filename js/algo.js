// write a function that count the number of vowels in a given string
let words = "Love";

// console.log(words[1]);

function countVowel(str) {
  let vCount = 0;
  vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vCount++;
    }
  }
  return vCount;
}

// console.log(countVowel("mike"));

// determine sting length;

function strLength(str) {
  if (!str) {
    return "please enter your name: ";
  }

  let len = str.length;
  if (len < 3) {
    return "your name is too short";
  }

  return `Congratulations ${str} your name has now been approved. `;
}

// console.log(strLength("Mike"));

//add even number in a given range

function sumEven(initial, destination) {
  if (!initial || !destination) {
    return "Please indicate the start and end of the two numbers";
  }
  if (initial >= destination) {
    return "please ensure that the desitination number is higher than the start";
  }
  let sum = 0; //inialise 0
  for (let i = initial; i <= destination; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

// console.log(sumEven(2, 10));

//count duplicate characters in any given string;
//emmanuel =>me => 2
//mike=>0
// ebube=>eb= 2

function countDuplicateCharacter(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result += str[i];
    }
  }
  return str.length - result.length;
}

// console.log(countDuplicateCharacter("ebube"));

// let school = "uniport";
// let schl = school.split("")
// console.log(schl.reverse().join(""));

// write a function to check if a particular string is palidrone
//if its palidrone return true otherwise return false
// ebube => reverse => compare the given with reverse string 

function isPalidrone(str){
let givenStr = str.toLowerCase();
let strRev = givenStr.split("").reverse().join("");
// if(str===strRev){
//     return true
// }
// return false

return givenStr === strRev;
}

console.log(isPalidrone("reFeR"));