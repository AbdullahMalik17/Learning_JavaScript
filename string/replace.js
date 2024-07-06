/*
    <-------replace()--------->
It is used to replace one element with other.

It's syntax as follows:-

 variable-name.replace(value1,value2)

 1. value1 is the value of string.
 2. value2 is the value that is replaced.

 */
// For example:-
let a = "To be or not to be";
console.log(a.replace("be","hello"))       // output To hello or not to be 

// If I want to replace all be with hello ,I use g\

console.log(a.replace(/be/g,"hello"))     // output To hello or not to hello
