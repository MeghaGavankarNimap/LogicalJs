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
function isRev(str){
     ans=''
     for(let i=str.length-1;i>=0;i--){
        ans+=str[i]
       
         
     }
     if(ans==str){
          return ans
     }
     return 'not a palindrome'
     
    
    
}
const str="radar"
console.log(isRev(str))

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


