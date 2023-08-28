// shallow and deeep copy of js
let val=10
let copied=val
console.log(val)
console.log(copied)
copied=20
console.log(val)
console.log(copied)

// 1st method=-assignment
let val={
    name:"abc",
    tech:"angular",
    age: 20}

copied.age=10
console.log(copied)
console.log(val)

// json.stringify
let val1={
    name:"abc",
    tech:"angular",
    age: 20,
 getname:function(){
    return this.name;

},
address:{
city:"mumbai",
dist:"mum"
}

}

// let copied1=JSON.parse(JSON.stringify(val1))
// copied1.age=30
// console.log(copied1)
// console.log(val1)
// will not work for function


//  let shallow=val1
//  shallow.age=30
//  console.log(shallow)
//  console.log(val1)


// let copy=Object.assign({},val1)
// copy.age=50
// console.log(copy)
// console.log(val1)
// copy.address.city
// will not work nested object
// copy.address.city="pune"
// console.log(copy)
// console.log(val1)

// let copiedValue={...val}
// copiedValue.name="xyz"
// console.log(copiedValue)
// console.log(val)
// copiedValue={
//     ...copiedValue,
//     name:'klm'
// }


let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates(arr));
// here spread operator is used to set new array in arr


// remove duplicate elemet

function rem(arr){
    const unique=[]
    for(let i=0;i<arr.length;i++){
        let duplicate=false;
       for(let j=0;j<unique.length;j++) {
           if(arr[i]===unique[j]){
             duplicate=true
               break;
           }}
          if(!duplicate){
              unique.push(arr[i])
          }
       
    }
    return unique;
}

let arr = [2,5,1,5,2,1];
console.log(rem(arr));


// doubt

'use strict';

var num =7;

function num() {
  return 10;
}

console.log(num());






