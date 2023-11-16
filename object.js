const newObj={
    name:'megha',
    tech:'amgular',
    experience:2
}

console.log(Object.keys(newObj))
console.log(Object.values(newObj))
console.log(Object.entries(newObj))


// code to find vowels and count 1 for conseutive vowels
function check(arr){
    let newstr=arr.toLowerCase()
    let vowels=["a","e","i","o","u"]
    let count=0
    // let newvowels=''
    for(let i=0;i<newstr.length;i++){
      for(let j=0;j<vowels.length;j++){
          if(newstr[i]==vowels[j]){
            // newvowels+=newstr[i]
            count++
            
            if(vowels.includes(newstr[i-1])){
            count--
            }
          }
        }
     
    }
    
    return count
   
}
const arr="saii"
console.log(check(arr))


// code to find count of  same letter in a word
function ischeck(str){
    let objval={}
    for(let i=0;i<str.length;i++){
        let count=0
        for(let j=0;j<str.length;j++){
            if(str[i]===str[j]){
                count++
                
            }
                
            }
             objval[str[i]]=count
        }
            
        return objval
    
    
    
}
const str="engineer"
console.log(ischeck(str))