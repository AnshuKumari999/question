// 1.Create a Function

function Check(obj1){
    obj1.setter=function(){
       console.log(this.name);
     }
}

// 2. Delete a Parameter
function Check(obj1) {
    delete obj1.rollno;
     return obj1;
 }
 
 // 3. Check whether the Package is Dream Package or not

 function Check(obj1) {
    if (obj1.salary<500000){
      return "NotDream"
    }
    else {
     return "Dream"
    }
}

// 4.Check whether the Object has a parameter or not


function Check(obj1) {
    if(Object.keys(obj1).length === 0){
      return "false"
    }
    else {
      return "true"
    }
 }
 
 
// 5.Merge the Objects

 
function Check(obj1,obj2) {
    let sum=Object.assign(obj1,obj2);
    return sum;
}
 
//6. Object Multiplyer

function Check(a,obj1) {
    obj1.id=obj1.id*a;
        obj1.houseno=obj1.houseno*a;
        return obj1;
}

// 7. Find the  sum of Object Members

function Check(obj1) {
    let sum=obj1.p1+obj1.p2+obj1.p3;
    return sum;
}

// 8. Check whether the Objects are same or not.

function check(obj1,a,b) {
    if((obj1.name ==a)&&(obj1.id ==b)){
      return ("true");
    }
    else {
      return ("false");
    }
}





    
    