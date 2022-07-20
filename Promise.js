/*1.Write one example explaining how you can write a callback function ?

Callback function,when we call a function inside a function or passes
 function as an argument while calling a function is called as callback function.
*/
function sum(a,b){
    return a+b;
 }
  function sum2(cb,a,b){
      cb(a+b);
 }
  sum2(function(sum){
     console.log(sum);
},4,5)


/*."Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

Explain callback hell.
Numbers
 1
 2
3
4
 5
 6
 7"
*/

function value1(){ 
    console.log('1');
}
setTimeout(value1,1000);

function value2(){ 
    console.log('2');
}
setTimeout(value2,2000);

function value3(){ 
    console.log('3');
}
setTimeout(value3,3000);

function value4(){ 
    console.log('4');
}
setTimeout(value4,4000);

function value5(){ 
    console.log('5');
}
setTimeout(value5,5000);

function value6(){ 
    console.log('6');
}
setTimeout(value6,6000);

function value7(){ 
    console.log('7');
}
setTimeout(value7,7000);


/*Que-3.Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
 Numbers
 1
2
3
4
 5
6
7
*/
const arr=[];
for (let i=0;i<8;i++){
    const promise= new Promise(function (res,rej){
      setTimeout(()=>{
     res(i);
    },1000*i);
    })
arr.push(promise);
}
for (let i=0;i<arr.length;i++){
arr[i].then(data=>{
  console.log(data);
}).catch(error=>{
  console.log(error);
})
};


/*4. Create a promise function accepting a argument, if yes is passed to the function then it should go to 
resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and
catch the error and print Promise Rejected.
*/
function Promises(m) {
    const promise = new Promise((Resolved,rejected)=>{
      if (m == 'yes') {
        Resolved('Promise Resolved');
      } else {
        rejected('Promise rejected');
      }
    })
    return promise;
    }
  Promises()
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });


/*5.Create examples to explain callback function.
Here when x() has been called then y has been called inside x 
so there will be callback and b will execute first then a will end;
*/
function x(){
    y();
    }
    function y(){
        console.log('Callback funtion');
    }
    x()


/*6.Create examples to explain callback hell function.

callback hell is when people try to write JavaScript in a way where execution happens visually from top to bottom & forming a pyramid structure.
*/
const animate = () => {
    setTimeout(() => {
        console.log("1");
        setTimeout(() => {
            console.log("2");
            setTimeout(() => {
                console.log("3");
            }, 3000)
        }, 2000)
    }, 1000)
}
animate();

/*7. Create examples to explain promises function.
A Promise is a JavaScript object that links producing code and consuming code.
"Producing code" is code that can take some time.
"Consuming code" is code that must wait for the result.
A promise object has one of three states:
pending: is the initial state.
fulfilled/Resolve: indicates that the promised operation was successful.
rejected: indicates that the promised operation was unsuccessful. */

​let myPromise = new Promise(function(Resolve,Reject) {
    let x = 1;
    if (x == 0) {
      Resolve("OK");
    } else {
      Reject("Error");
    }
  });
    myPromise.then(function(data){
      console.log(data);
  }).catch(function(err){
      console.log(err)
  });


/*8.Create examples to explain async await function.

await can only be used inside async function.
await is used along with promise and it returns the fullfiled promise result.*/

async function Result(){
    console.log('Result');
    let res=await Result(20);
    return res;
}
console.log('Before calling Result')
let a=Result()
console.log('After calling Result');
console.log(a);
a.then((data)=>{
    console.log(data);
})


//9.Create examples to explain promise.all function.

const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });