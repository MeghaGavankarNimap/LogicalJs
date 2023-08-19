function isPrime(nums){

    for(let i=2;i<nums;i++){
            if((nums%i)==0){
               return false 
            }
        }
      
      return true  
    }
    const num=[12,30,54,9,13]
    for(const nums of num){
        if(isPrime(nums)){
            console.log("prime number:"+nums)
        }
        else{
            console.log("not prime number:"+nums)
        }
        
    }

    // find duplicate num
const arr=[4,8,2,8,10,2]
const ans=[]
function dup(arr){
   for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length-1;j++){
        if(arr[i]==arr[j]){
            ans.push(arr[i])
        }
    }
  }
 return ans
}
console.log(dup(arr))

// second largest
function secLar(arr){
    let max=arr[0]
    let sec=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
            sec=max
        }
        else if(arr[i]<max){
            sec=max
            
            
        }
    }
    return sec
    
    
}
const arr= [12, 35, 1, 10, 34, 1, 35]
console.log(secLar(arr))


// find second largest val from duplicte no including array
function secLar(arr1){
    let max=arr1[0]
    let sec=arr1[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
             sec=max
            max=arr1[i]
           
        }
        else if(arr1[i]>sec && arr[i]!=max){
            sec=arr1[i]
            
            
        }
    }
    return sec
}
const arr1= [12, 35, 1, 10, 34, 1, 35]
console.log(secLar(arr1))

//subject in angular
// to pass the data use next and to read data use subscribe
// in behavior sub we dont have to use next method .without using next we can subscribe the behavior sub because we initialized the value in behavior subject.
// but If we write next method in befunction fact(num) {

// factorial
let ans2 = 1;
    for (let i = 2; i <= num2; i++) {
        ans2 *= i;
    }
    return ans2;


const num2 = 3;
console.log(fact(num2));



