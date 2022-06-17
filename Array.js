// Write a program that takes an array as input from the user and find out the product of the elements.

const Find_Prod = (array, N) => 
{
 
     let product = 1;
         for(let element of array){
           product*=element;
         }
         return product;
    

};
 
// Write a program which takes an array as input from the user and find out the sum of the array elements.

Find_Sum = (array, N) => 
{
  
let p = 0;
      for(let element of array){
        p+=element
      }
      return p;
    
};

//  You are given an array A containing N integer elements and an integer  K, and your task is to return the count of occurrences of K in array A

let count=0;
        for(let i in Arr)
        {
          if(Arr[i]===K)
          {
            count += 1;
          }
        }
        return count;

// You are given an array A containing N integer elements, and your task is to return an array B (having a size equal to 2), where B [0]contains the sum of all even elements of array A and B [1]has the sum of all odd elements of the array A


const findEvenOdd = (N, Arr) => 
{
    let oddCount = 0;
        evenCount = 0;
        let arr = [];
        for(let a of Arr){
          if(a%2===0){
            evenCount+=a;
          }
          else{
            oddCount+=a;
          }
        }
        arr[0] = evenCount;
        arr[1] = oddCount;
        return arr;
};
 
// Write a program which takes an array as input from the user and a number.Check whether the number is present or not.

let count=0;
for(let p of array){
  if(p===M){
    count+=1
  }
}
if(count>0){
  return "YES";
}
else{
  return "NO"
}

// You are given an array A containing the age of persons in your locality, and your task is to find and return an array containing the age of persons that are over 18 (18 included).

let p=[];
        for(let b of Arr){
          if(b>=18){
            p.push(b)
          }
        }
        return p;

// You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.You have to complete Inc_Arr. No need to take any input.


const Inc_Arr = (array,N) => 
{
  
      let arr ="";
      for(let p of array)
      {
        arr+=(p+1).toString()+" ";
      }
      console.log(arr);
    
};

// Pass or Fail

const isAllPass = (N, Arr) => 
{
  return Arr.every((p)=>p>=32)?"YES":"NO";
    
};

// Unique Color Shirt


function Unique_Shirts (arr,N) {
    let arr1=Array(10000).fill(0);
        for(let a of arr){
          arr1[a]+=1;
        }
        let count=0;
        for (let a of arr1)
        {
          if(a===1)
          {
            count+=1;
          }
        }
        return count;
      
     
    }

//  Min and Max

function arrayMin(arr) {
    let min=arr[0];
    for (let a of arr){
      if(min>a){
        min=a;
      }
    }
    return min;
  
  }
  
  function arrayMax(arr) {
   let max=arr[0];
   for(let a of arr){
     if(max<a){
       max=a;
     }
   }
   return max;
  }

//  Birthday Game

function Birthday_Game(arr,D ,M) {
    let finalCount=0;
    for(let a=0;a<(arr.toString().length-M);a++){
      let count=0;
      for(let b=a;b<(a+M);b++){
        count+=arr[b];
      }
      if(count===D){
        finalCount+=1
      }
    }
    return finalCount;
   
   }
    