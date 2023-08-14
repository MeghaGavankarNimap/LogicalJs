function isPrime(nums){

    for(let i=2;i<=nums;i++){
            if((nums%i)==0){
               return false 
            }
        }
      
      return true  
    }
    const num=[12,30,54,9]
    for(const nums of num){
        if(isPrime(nums)){
            console.log("prime number:"+nums)
        }
        else{
            console.log("not prime number:"+nums)
        }
        
    }