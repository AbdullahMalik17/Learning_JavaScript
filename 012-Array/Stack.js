/*
  <---------Stack--------->
  Stack is a liunear Data structure.It's working is like stone on
  stone .It's basic implementation is Last in First out.

 Stack has two functions as follows:-
 1. push ():-
        It is used to add the element in the array from last.
        It's sntax as follows:-
           array-name.push(value);

 2. pop ():-          
        It is used to remove the element from array from first out.
        It's syntax as follows:-
        array-name.pop()
  
*/
// For Example :-
let name=[]
name.push("Abdullah","Haleema")
console.log(name)           // output [ 'Abdullah', 'Haleema' ]
name.pop()
console.log(name)           // output [ 'Abdullah' ]