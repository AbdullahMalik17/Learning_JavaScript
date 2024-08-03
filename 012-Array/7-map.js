/*
<-----------Map Function---------->
They are higher order array methods.They are used to make a new array before perform some operation in first array.
It's syntax as follows:-
     array.filter((value,index,array) =>{
          business logic
          })
 */
// for example:-
let num =[1,2,3,4]
const n= num.map((value)=>{
     return value/2;
})   
console.log(n) //  [0.5, 1, 1.5, 2];     