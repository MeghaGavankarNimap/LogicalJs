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
