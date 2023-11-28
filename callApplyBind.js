// Call
// this method is used to call any object inside a function using call()method
// function instance name.call(objectname)
// so call method is used to write a method which can be used for different object. 
// call is also used to ADD extra value
let userDetails={
    name:"megha",
    tech:"angular",
    Designation:"software DEveloper",
  

}

let printDetails=function(){
    console.log(this)
}

printDetails.call(userDetails);

let userDetails1={
    name:"megha",
    tech:"angular",
    Designation:"software DEveloper",
  

}

printDetails1.call(userDetails);
printDetails1.call(userDetails,"mumbai","pune");

// apply
// can pass array list with object 
printDetails.apply(userDetails,["mumbai","pune"]);


// bind
// you can create copy of a function and invoke later
let newfun=printDetails.bind(userDetails,"pune","pune1");
newfun()