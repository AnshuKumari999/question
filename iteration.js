// 1.Take a number from the user and print the count of digits in that number.


const Find_Digits = (N) => 
{
  var count = 0;
  while(N!==0)
  {
    N =  Math.floor(N/10);
    ++count;
  }
  return (count);
};

//2. Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.


const Find_Five = (N) => 
{
  var count = 0;

	 
	 while(N>0)
	{
	   if(N%10==5)
	   {
	     count++;
	   }
	   
	   N = parseInt(N/10);
	 }
	 return (count);
	   
	 
};

// 3. You are given an integer N, and your task is to find the sum of all the even integers starting from 1 upto N (N inclusive).


const findSum = (n) => {
    let i, sum = 0;  
       for (i = 2; i <= n; i+=2) {  
           sum += i;  
       }  
       return sum;  
   
};

//4. Write a program that takes a number from the user and get the sum of the digits present in the number.


const Number_Sum = (N) => 
{
  let r;
  let sum=0;
  while(N!==0)
  {
    r=N%10;
    sum = sum+r;
    N = parseInt(N/10);
    }
    return (sum);
    };

   //
   
   
   
   // Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.
   const Print_Odd = (N) => 
{
	 console.log('2')
	 let num=3;
	 while(num<=N){
	   console.log(num)
	   num+=2
	 }
};


// Write a program which ask user for no of lines and print a pattern using an asterik .
const Print_pattern = (N) => 
{
  let i,j;
 
  for(i=0;i<N;i++){
     let result=''
    for(j=0;j<=i;j++){
      result=result+'*'
    }
    console.log(result)
  
  }

};

// Write a program which takes  a number from user and check whether number is prime number or not a prime number.

const Prime_Check = (N) => 
{
	 let i=2;
             while(i < N){
               if(N%i !==0)
               {
                 return "YES";
               }
               else{
                 return "NO";
               }
               i++;
             }
};

// Write a program which takes  a number from user and check whether number is prime number or not a prime number.

const Prime_Check = (N) => 
{
	 if(N===1){
           return "NO"
         }else{
           let f =0;
           for(let i = 2;i<N;i++){
             if (N%i===0){
               f=1
               break;
             }
           }
           if(f===0){
             return "YES"
           }else{
             return "NO"
           }
           
         }
};

// You are given an integer N, and your task is to print all the integers starting from 1 till N
 
const printNumbers = (n) => {
  
  p="";
  for(let i=1;i<=n;i++){
    p+=i+" ";
  }
  console.log(p);
};

// Write a program which takes a number from user and print the table.

const Print_Table = (N) => 
{
	for(let p = 1;p<=10;p++){
          console.log(`${N} * ${p} = ${N*p}`)
        }
};



