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