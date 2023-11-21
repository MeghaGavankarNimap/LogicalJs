let arr=["mango","apple","orange","mango","apple"]
function rem(arr){
    return arr.filter((item,index)=>
    arr.indexOf(item)===index)
        
  
    
}
console.log(rem(arr))


// shift all zeros to right





// cretae new array which remove duplicate element
function myfun(arr){
    let newarr=[]
     for(let i=0;i<arr.length;i++){
          let isu=true
            // for(let j=0;j<newarr.length;j++){
            //   if(arr[i]==newarr[j]){
                  
            //      newarr+=arr[i]
                  
            //   }
            if(arr[i]===newarr[j]){
                isu=false
                break
            }
            if(isu){
                 newarr.push(arr[i])
            }
           }
        }
        return newarr
    
    
    const arr=[4,5,4,2,5,7,8,9,7,8]
    console.log(myfun(arr))
    

    // to find index of specific sum
function myfun(nums){
    let newval=[]
    for(let i=0;i<nums.length;i++){
        for(let j=1;j<nums.length;j++){
            if(nums[i]+nums[j]===9){
                
                 newval.push([i],[j]) 
            }
        }
    }
    return newval
}

nums = [2,7,11,15]
console.log(myfun(nums))

// addition of key in object 
var obj={
    a:1,
    b:2
  }
  
  var newval={
    ...obj,
      c:obj.a+obj.b
      
  }
  console.log(newval)


//   multiplication of num except that num arr[i]
function myfun(nums){
    let newarr=[]
   
    for(let i=0;i<nums.length;i++){
         let word=1
        for(let j=0;j<nums.length;j++){
        if(nums[i]!==nums[j]){
           word*=nums[j]
        //   console.log(word)
          
        }
     }
        newarr.push(word)
        
    }
    return newarr
}
nums = [5,2,3,4]
console.log(myfun(nums))


// code to count consecutive vowels in word
function myfun(str){
    let count=0
    let vow=["a","e","i","o","u"]
    for(let i=0;i<str.length;i++){
        if( vow.includes(str[i])){
            if(i===0||!vow.includes(str[i-1])){
                count++
            }
           
        }
    
        
    }
    
    return count
  
}
str = "heeello"
console.log(myfun(str))
