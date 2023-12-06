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




// ffunction secLar(arr){
   let max=arr[0]
   let sec=arr[0]
   let third=arr[0]
   for(let i=1;i<arr.length;i++){
       if(arr[i]>max){
           third=sec
            sec=max
           max=arr[i]
          
       }
       else if(arr[i]>sec&&arr[i]!==max){
             third=sec
           sec=arr[i]
       }
        else if(arr[i]>third&&arr[i]!==max&& arr[i]!==sec){
             third=arr[i]
          
       }
       
   }
   return third
}

let arr = [22,57,11,50,23,61];
console.log(secLar(arr));


// count words in letter
function myfun(b){
    let s = "ten";
    let count= 0
   for(let i=0;i<b.length;i++){
    let t = b[i]+b[i+1]+b[i+2];
       
       if(s==t){
           count++
       }
}
     return count
}

let b = "hfksdjfrwtenfsdjhtenaiosufuten";
console.log(myfun(b))



 for(let i=0;i<s.length;i++){
        if(s[i].includes(b)&&s[i+1].includes(b)&&s[i+2].includes(b)){
            count++
        }




// anagram
function myfun(val1,val2){
    let data1={}
    let data2={}
  
    for(let i=0;i<val1.length;i++){
        let count1=0
        for(let j=0;j<val1.length;j++){
            if(val1[i]===val1[j]){
               count1++
            }
            data1[val1[i]]=count1
        }
     }

    for(let k=0;k<val2.length;k++){
        let count2=0
        for(let l=0;l<val2.length;l++){
            if(val2[k]===val2[l]){
               count2++
            }
            data2[val2[k]]=count2
        }
       
    }
    
    if(_.isEqual(data1,data2)){
        return data1+"is a anagram"
    }
    else{
        return data1+"is not  a anagram"
    }
  
}
const val1="abcd"
const val2="bcda"
console.log(myfun(val1,val2))