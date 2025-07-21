const numbers = [1,2,3,4,5,6];
numbers[6]=10;

function doubleEachNumber(arr){
   for(let i=0; i<arr.length; i++){
    arr[i] = arr[i] * 2;
   }
   return arr;
}

const doubleArr = numbers.map((number)=>number * 2);
console.log(doubleArr);

const doubleArr2 = arr=>{
    return arr.map((number)=>number * 2);
}

// console.log(doubleEachNumber(numbers));