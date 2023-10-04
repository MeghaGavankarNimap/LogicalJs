var x = 5; 
console.log(x)
console.log(y)
var y = 7;
console.log(x+y)


function num() {}
var num;
console.log(typeof num); // output will be function because when name is same of function and varibale then function get high priority 

function secLar(arr) {
    // Remove duplicates from the array using a Set
    const uniqueArr = [...new Set(arr)];

    if (uniqueArr.length < 2) {
        // If there are fewer than 2 unique values, there's no second-largest value
        return undefined;
    }

    let max = uniqueArr[0];
    let sec = uniqueArr[0];

    for (let i = 1; i < uniqueArr.length; i++) {
        if (uniqueArr[i] > max) {
            sec = max;
            max = uniqueArr[i];
        } else if (uniqueArr[i] < max && uniqueArr[i] > sec) {
            sec = uniqueArr[i];
        }
    }

    return sec;
}

const arr = [12, 5, 70, 55, 20, 70];
console.log(secLar(arr)); // Output: 55



