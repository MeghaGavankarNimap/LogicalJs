// console.log(2+'5') OR console.log('2'+5) =>concatenates num and returns String
// after concatination typeof will be string
// console.log(2+'5'-8) OR  console.log(2+'5'-'8')  =>for both output will 17 it indicates that sting -number or sting +number always substract.
// console.log(2+'5'+'8') OR  console.log(2+'5'+'8')  =>for both output will 33 it indicates that sting +number or sting +string always concats

// ([]+[]) when empty array conatinates or add ,it will convert array to string

// Type coercion is the automatic or implicit conversion of values from one data type to another .

var x = 5;
var y = x++;
console.log(x);  // Output: 6 (x is incremented after its value is assigned to y)
console.log(y);  // Output: 5 (original value of x before increment)

var x = 5;
var y = ++x;
console.log(x);  // Output: 6 (x is incremented before its value is assigned to y)
console.log(y);  // Output: 6 (new incremented value of x)
