/*

<------------- OR operators in conversion------------->
1. If all the non-booleans valus are false, then it will return last value.
2. If any one value is true, then it will return true value.
3. If all the operands are true , then it will return first value.

*/
// For Example:-
var b;
var a=0||b;
console.log(a)
var c="cat"||0;
console.log(c)
var d="dog"||"cat";
console.log(d)