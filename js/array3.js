// const numbers =  [1,2,3,]

//reverse a string

// ade => eda

// emma =>amme

// function reverseStringA(str){
//     let newStr = '';

//     for(let i=str.length-1;i>=0;i--){
//      newStr+=str[i];
//     }
//     return newStr;
// }
// console.log(reverseStringA("emma"));

// const username = ["retorer","mike"];

// console.log(username.reverse());

// function solution2(str){
//     return str.split('').reverse().join("");
// }
// console.log(solution2("emma"));

//count vowels in a given  string
//emmanuel =>4
//retorer =>3

function countVowels(str) {
  let count = 0;
  strReformed = str.toLowerCase();
  let vowels = "aeiou";
  for (let i = 0; i < strReformed.length; i++) {
    if (vowels.includes(strReformed[i])) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels("this is lovely lecture"));

//longest word in a sentences
// the girl is ridiculously beautiful
// let names = ["a","abbdbdnd","abc","abcd"];
// let longestWord = names[0];

// for(let i=0; i<names.length; i++){
//     let word = names[i];
//     if(word.length > longestWord.length){
//       longestWord  = word;
    
// }

// }
// console.log(longestWord);

function findLongestWord(str){
    strInArr= str.split(' ');
    let longestWord = strInArr[0];
    for(let word of strInArr){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

// console.log(findLongestWord("this is my boy"));

// 23 23 6 6 9 3 3 45 45 10->4

// 4

// Say that a "clump" in an array is a series of 2 or 
// more adjacent elements of the same value. Return the number of clumps in the given array.

// Examples

// countClumps([1, 2, 2, 3, 4, 4]) → 2
// countClumps([1, 1, 2, 1, 1]) → 2
// countClumps([1, 1, 1, 1, 1]) → 1

function countClumps(arr){
 let clump = 0;
let inClamp = false;

for(let i =0; i<arr.length; i++){
    if(arr[i] === arr[i - 1]){
     if(!inClamp){
        clump++;
        inClamp = true;
     }
    }else{
        inClamp = false;
     }
}
return clump

}
