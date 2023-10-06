// WAP to find Second largest element in an array : arr[] = [12, 35, 1, 10, 34, 1, 35], without sorting,
//  without using any built-in methods and without deleting duplicate elements. What will be the time complexity?

function sec(arr){
    let max=arr[0]
    let sec=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
           
            sec=max
             max=arr[i]
        }
        else if(arr[i]>sec && arr[i]!==max){
            sec=arr[i]
        }
        
    }
    
    return sec
    
}
arr = [12, 35, 1, 10, 34, 1, 35]
console.log(sec(arr))


// WAP to reverse an integer without converting it to a string, without using any built-in methods. 
let a=10
 let b=12
 a=a+b
 b=a-b
 a=a-b
 console.log(a)
 console.log(b)

//  WAP to reverse an integer without converting it to a string, without using any built-in methods. 
function isRev(num){
    let rev=0
    while(num>0){
    
    rev=(num%10)+(rev*10)
    num=Math.floor(num/10)
    
    }
      return rev
   
}
const num=123
console.log(isRev(num))


// Find the reverse of the string.
function isRev(str){
    let val=str.toLowerCase()
     let ans=''
    console.log(val)
    for(let i=val.length-1;i>=0;i--){
       
        ans+=val[i]
    }
   return ans
   
}
const str="megha"
console.log(isRev(str))


// 6. WAP to find the given string is Palindrome or not.
function isRev(str){
    let val=str.toLowerCase()
     let ans=''
    console.log(val)
    for(let i=val.length-1;i>=0;i--){
       ans+=val[i]
      
    }
   if(val===ans){
         return val+"is a palindrome"  
       }
       else{
          return val+"is not a palindrome"    
       }
   
}
const str="megha"
console.log(isRev(str))















 