const { type } = require("os")

// temporal dead zone=the time from hoisting(declartion) of variable to initialization is called temp dead zone.so whenever you try to access the varibale between temp dead zone it gives reference error.cannot access before initialization.
let a=10
console.log(a)
var b=23

// b get attached to window obj
// window.b   on console will be 23

// const should be initialized and declare in the same line
// const b
// b=12
// console.log(b)
// so here gives syntax error
// Reference error=when we reaasign value or try to find val before intitialization
// type error=const should be ini and declare
// syntax error=if we do not initi and declare val in same line then it will give syn error


let func = function foo() {
    return 'hello';
  }
  
  console.log(typeof foo);
//  it return undefined
// In named function expressions, the name is local only to the function body and is not available from outside. So foo doesn’t exist in the global scope.

