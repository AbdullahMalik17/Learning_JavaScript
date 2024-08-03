/*
    <-----------slice Function---------->
 To create an array with use of large array.
 If we want to make an array  with use of another array , we use slice.

 It's syntax as follows:-
     variable-name.slice(start of index, end of index)

 */
// For Example:-
let number =[1,2,3,4,5,6,7,8,9]
console.log(number)
let num2=number.slice(2,8) 
console.log(num2)       // output [ 3, 4, 5, 6, 7, 8 ] 