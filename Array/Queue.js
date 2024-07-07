/*
   <--------Queue-------->
It is a linear Data Structure .It's example is like as a grocery store . 
First in  and First get. It's basic implementation is First in first out

It has two Functions as follows:-
1. unshift():-
        It is used to add the element in the array first in place if index[0].
        It's syntax as follows:-
        variable-name.unshift(value)

2. shift():-
       It is used to remove the element of array from first.
       It's syntax as follows:-
       variable-name.shift()

 */
// For Example:-
let name = ["Abdullah"]
name.unshift("Father Athar","Mother Bushra")
console.log(name)        // output [ 'Father Athar', 'Mother Bushra', 'Abdullah' ]
name.shift()
console.log(name)        // output [ 'Mother Bushra', 'Abdullah' ]
