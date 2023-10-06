const numbers = [1800, 50, 300, 20, 100];


let difference = numbers.reduce(
  (accumulator, currentValue) => accumulator - currentValue
);
console.log(difference); 
const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000;


let remaining = expenses.reduce(
  (accumulator, currentValue) => accumulator - currentValue,
  salary
);
console.log(remaining); 


// palindrome 
function rev(str){
  // return str.split('').reverse().join('')
  let ori
 ori=str.toLowerCase()
 console.log(ori)
  let change=''
  for(let i=ori.length-1;i>=0;i--){
       change+=ori[i]
  }

  if(ori==change){
      return str+" is a palindrome"
  }
 else{
      return str+" is a not palindrome"
 }
 
  
}
const str="Radar"
const val=rev(str)
console.log(val)


// fibonaccei series
function fib(num){
  let n1=0;
  let n2=1;
  let next
  console.log(n1);
  console.log(n2);
  next=n1+n2
   while(next<num){
// for(let i=1;i<num-1;i++){
      console.log(next)
      n1=n2
      n2=next
      next=n1+n2
     
      
      
      
  }
  return next 
}
const num=5
console.log(fib(num))

// prime num from 1 to n
function prime(i){
  for(j=2;j<i;j++){
      if(i%j==0){
          return false
      }
      
  }
  return true

  
}
for(let i=1;i<=100;i++){
  if(prime(i)){
      console.log("prime"+i)
      
      
  }
  else{
     console.log("not prime"+i) 
  }
}

// fibonacci using recurssion
function fib(num){
   
  if(num<=0){
      return []
  }
  else if(num==1){
      return [0]
  }
  else if(num==2){
      return [0,1]
  }
  
  else {
    let val=fib(num-1)
    let ans= val[val.length-1]+val[val.length-2]
    val.push(ans)
    return val
    
  }
      
  
}
const num=5
console.log(fib(num))


//  WAP to print Fibonacci series with recursion.
function fib(num){
    
  if(num<=0){
      return []
  }
  else if(num==1){
      return [0]
  }
  else if(num==2){
      return [0,1]
  }
  else{
      let val=fib(num-1)
      let ans=(val[val.length-1])+(val[val.length-2])
     val.push(ans)
     return val
  }
}
const num=5
console.log(fib(num))

// 8. WAP to print Fibonacci series without recursion.
function fib(num){
  let n1=0
  console.log(n1)
  let n2=1
 console.log(n2)
  let next=n1+n2

  while(num>next){
      console.log(next)
      n1=n2
      n2=next
      next=n1+n2
    
    
  }

 
}
const num=5
fib(num)


// Code to find even numbers in a list
function prime(val){
  for(let i=2;i<val;i++){
      if(val%i===0){
          return false
      }
      else{
          return true
      }
  }  
}
const arr=[13,43,60,22,70,40]
for(let val of arr){
   if(prime(val)){
      console.log(val +"is a prime no") 
   }
   else{
       console.log(val +"is not a prime no")  
   }
}


// 11. Find prime numbers from 1 ....n 
function prime(j){
  for(let i=2;i<i;i++){
      if(j%i===0){
          return false
      }
      else{
          return true
      }
  }  
}

for(let j=1;j<=100;j++){
   if(prime(j)){
      console.log(j +"is a prime no") 
   }
   else{
       console.log(j +"is not a prime no")  
   }
}


//  Sum of squares of first n prime numbers
// Input = 4, Answer = 87
// Explanation: 2*2+3*3+5*5+7*7 = 87
