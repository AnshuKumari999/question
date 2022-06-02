// 1. You are provided with two numbers A and B.Your task is to add these two numbers.
AddTwoNumbers = (a,b) => {
    return a+b;
      
  };
 // 2. You are given two number first as Aand second as Band check if both conditions (A<10and A>B) are satisfied or not with the help of operators. 
 const Is_Valid = (a,b) => {
    return ((a < 10) && (a > b))
   
 };

 /* 3. You are given two numbers A and B. You need to do the following checks:
if both are divisible by 10 console true.
if both are not divisible by 10 console false.
if one of them only is divisible by 10 console true.
Use operator to do this.
*/

const Check = (A, B) => 
{
    return ((A%10 ===0 && B%10 === 0) || (A%10 === 0 || B%10===0))? 'true': 'false';
};

// 4. You are provided a four digit number N only. Your task is to print out the first digit of that number.
First_Digit = (n) => {
    while(n>=10){
    n =Math.trunc(n/10);
  }
  return (n);
  
 };

 // 5. You are provided a four digit number N only. Your task is to print out the last digit of that number.
 Last_Digit = (n) => {
    return (n%10);
 };

 // 6. You are provided with two numbers A and B where Aas  divisor and B as  dividend.Your task is find the remainder.
 const Find_the_remainder = (a,b) => {
    return(b%a);  
  };

  // 7. You are provided with two numbers A and  B. Your task is to multiply these two numbers.

  const Multiply_two_number = (a,b) => {
    return(a*b);
};

// 8. Shyam has got his marks in three subjects as A, B and C (out of 100).Write a program to calculate his total marks and his total percentage.

const Sum = (A, B, C) => 
{
 return(A+B+C);
};

const Average = (A, B, C) => 
{
 return((A+B+C)/3)
};
