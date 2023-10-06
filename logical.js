function isPrime(i){
    if(i==2){
        return i
    }
    for(let j=2;j<=i;j++){
        if(i%j===0){
            return false
        }
        else{
            return i
        }
    }
}
const num=4
 let val=[]
for(let i=1;i<=7;i++){
   if(isPrime(i)){
        // console.log(i)
        val.push(i*i)
}
    
}
 console.log(val)
 let ans=0
 for(let k=0;k<val.length;k++){
     ans+=val[k]
 }
 console.log(ans)
 
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
//  Sum of squares of first n prime numbers
// Input = 4, Answer = 87
// Explanation: 2*2+3*3+5*5+7*7 = 87

function prime(j){
    
    if(j==1){
        return false
    }
    if(j==2){
        return j
    }
 
  for(let i=2;i<j;i++){
        
      if(j%i==0){
            return false
        }
        

}
  return true  
}

const num=4
let val=[]
for(let j=1;j<=10;j++){
   if(prime(j)){
    //  console.log(j)
     val.push(j*j)
    
   }
    
}
console.log(val) 
let ans=0
 for(let k=0;k<val.length;k++){
     ans+=val[k]
 }
 console.log(ans)
 

// 19. count lowercase and uppercase
// input = "Helloworld"
// output = uppercase = 1, lowercase = 9

function ans(input){
    let uppercasecount=0
    let lowercasecount=0
   for(let i=0;i<input.length;i++){
       const val=input[i]
       if(val===val.toUpperCase()){
           uppercasecount++
    }
       else if(val===val.toLowerCase()){
            lowercasecount++
       }
        
    }
    return {uppercase:uppercasecount,lowercase:lowercasecount}
}
input = "Hello world!"
const final=ans(input)
console.log(final.uppercase)
console.log(final.lowercase)  




// 15.  4, 5, 6, 7, 8, 9, 11, 12, 13, 6, 7, 8, 9
// These two are linkedList, Find point of common element?
// Logic for above problem?
// What will be the complexity for it?
// Any better solution for the above problem?

function dup(arr){
    let val=[]
    for(let i=0;i<arr.length;i++){
        
         for(let j=i+1;j<arr.length;j++){
             if(arr[i]===arr[j]){
                 val.push(arr[i])
                 
             }
         }
    }
    return val
    
}

arr=[ 4, 5, 6, 7, 8, 9, 11, 12, 13, 6, 7, 8, 9]
console.log(dup(arr))


// 14. [80, 60, 10, 50, 30, 100, 0, 50]
// Find pairs whose sum = 100;
function pair(arr){
    const answer=[]
     for(let i=0;i<arr.length;i++){
         for(let j=i+1;j<arr.length;j++){
             if(arr[i]+arr[j]==100){
                 answer.push([arr[i],arr[j]])
                   
             }
         }
         
     } 
     return answer
  }
  
  const arr=[80, 60, 10, 50, 30, 100, 0, 50]
  const ans=pair(arr)
  console.log(ans)




//  find frequency of each and every character in a string.
// Input: Engineer
// Output : e3n2g1i1r1
  
/* Simple Hello World in Node.js */
function pair(val){
    let ori=val.toLowerCase()
    let arr={}
    for(let i=0;i<ori.length;i++){
        let count=0
        for(let j=0;j<ori.length;j++){
            if(ori[i]===ori[j]){
                count++
            }
        }
       
       Object.assign(arr, {
           [`${ori[i]}`]: count
       })
    }
    return arr
}
let val='Engineer'
console.log(pair(val))