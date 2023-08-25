let arr=["mango","apple","orange","mango","apple"]
function rem(arr){
    return arr.filter((item,index)=>
    arr.indexOf(item)===index)
        
  
    
}
console.log(rem(arr))
