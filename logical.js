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
 

