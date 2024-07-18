/*
   <----------splice()---------->
   It is used to add and replace element in the the middle of array.

   It's syntax as follows:-

     array-name.splice(index1,index2,value)

1. index1 is the index which we want to to add element.
2. index2 is the index which we want to replace with it.
3. We add multiple values.

*/
// For Example:-
let name=["Abdullah","Haleema","Hamna","Amna"];
console.log(name)
let a=name.splice(1,2,"Amber","Mudassir")
console.log(name)           // output [ 'Abdullah', 'Amber','Mudassir', 'Amna']

