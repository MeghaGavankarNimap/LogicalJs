// code to find duplicate number and their value
function iscount(arr){
    let final={}
   for(let i=0;i<arr.length;i++){
        const store=arr[i]
        // console.log(store)
       let count=0
        for(let j=0;j<arr.length;j++){
             
            if(arr[j]===store){
                count++;
            }
          }
          final[arr[i]]=count
         
         
     }
      return final
    
}
const arr=[1,2,3,1,2,1,3,3,3,4,5]
console.log(iscount(arr))



