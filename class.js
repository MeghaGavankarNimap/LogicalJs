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

  