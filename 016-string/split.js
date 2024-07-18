/*
   <-------split()-------->
   It is used to spilt a string on ther basis of substring 
   and turn of its array.

   It's syntax as follows:-
  
   variable-name.split("character")

   It spilt on the basis of character 

*/
// For example:-

let a = "To be or not to be";
console.log(a.split(" "))      // output ["To","be","or","not","to","be"]
console.log(a.split("to"))     // output [ 'To be or not ', ' be' ]
