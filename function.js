//Q1.  Create one function with zero parameter having a console statement;
function elements(){
    console.log("This is function with zero parameter having a console statemen");
}
elements();

//Q2. Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function add(a,b){
    console.log("Sum of" + a + "," + b + "is" + (a+b));
}
add(3,4);

//Q4.  Create one arrow function
let sum1 = (a, b) => {
    let result = a + b;
    return result;
}
let result1 = sum1(5,7);
console.log("This is an arrow finction" + " "+" the sum is " + " " + (result1));

//Q5.  var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl (); 

console.log("This function will return undefine");

//Q.6 "Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};



//Q7.  var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
}; 

// ReferenceError: Cannot access 'a' before initialization

//Q.8Write a function that accepts parameter n and returns factorial of n
function factorial(n){
    let fact = 1;
    if (n == 0 || n == 1){
      return fact;
    }else{
      for(var i = n; i >= 1; i--){
        fact = fact * i;
      }
      return fact;
    }  
  }
console.log(factorial(4));







