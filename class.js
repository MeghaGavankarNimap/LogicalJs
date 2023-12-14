// class
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  
  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);
  console.log(myCar1.name); 
  console.log(myCar2.year);


//   sort method
const arr=[12,54,28,90]
let val=arr.sort((a,b)=>{
    return a-b;
});
console.log(val)

// splice
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,1,"abc")
console.log(fruits)
// splice=(add ele at index,remove ele where added new ele,number of ele)

  
// for convering XXXX
function myfun(str){
  let end=str.slice(-4)
  let start=[]
  for(let i=0;i<4;i++){
      start+='X'
     
  }
  return start+end
  
}

const str='A1234568'
console.log(myfun(str))


// 
let one = "NIMAP";
let two = "INFOT";
let final=''
for(let i=0;i<one.length;i++){
          final+=one[i]
    for(let j=0;j<two.length;j++){
      if(one.indexOf(one[i])===two.indexOf(two[j])){
          final+=two[j]
        }
    }
    
}

console.log(final)