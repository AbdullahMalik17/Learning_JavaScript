/*
<--------Recursive Function------->
It repeat itself.It,s working is same as for loop.
factorial is an example of it.

*/
function factorial(n){
if(n<=1){
    return 1
}else{
    return factorial(n-1)*n
}
}
let b =factorial(7)
console.log(b)       // output 5040