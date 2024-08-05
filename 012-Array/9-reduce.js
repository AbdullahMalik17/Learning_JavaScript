/*
<-------reduce-------->
It is used to make a single result. It is mostly used for sum of all indexes.
It's syntax as follows:-
array.reduce((a,b)=>{
    return a+b;
    })
*/
// program:-
let num=[1,2,3,4,5,6,7,8,9]
let n=num.reduce((h1,h2)=>{
    return h1+h2
})
console.log(n)   // result 45

