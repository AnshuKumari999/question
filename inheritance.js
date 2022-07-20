/*1. create 2 object - parent and child . attached method to parent and used those method 
in child object using parent prototype
*/
let parent={
    property: "50 acre land",
    villa:"Morshi",
};
let child={
    address:'vision institute MORSHI',
    Dist:'Amravati'
}
child._proto_=parent;
console.log(child._proto_.property)

//2. write code to explain prototype chaining



let father={
    property: "50 acre land",
    villa:"Morshi",
    getDetails:function(){
        console.log( "villa","property")
    }

};
let child1={
    address:'vision institute MORSHI',
    Dist:'Amravati'
}
child1._proto_=father;
console.log(child1._proto_.property)
father.getDetails();


/*que3. add a method to calculate sum of all element in array's prototype used that method to calculate sum 
 for all multiple arrays
*/


function sum(arr)
{
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum = sum + arr[i];
    }
    return sum;
}

let arr = [12, 3, 4, 15];
let n = arr.length;

console.log(sum(arr));






//4. write a java script function to retrive all the names of objectes own and inherited properties

let obj={
    property: "50 acre land",
    villa:"Morshi",
    address:'vision institute MORSHI',
    Dist:'Amravati'
}
let result=Object.keys(obj)
console.log(result)







