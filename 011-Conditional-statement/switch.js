/*
<---------- Switch statement----------->
It is a conditional statement that is used when we have many 
case . We are to select one . It checks the equality with case .
Which case is matching with value ,that case is executing.

It's syntax as follows

switch(condition){
  case value1:
  code of block
  // break;

  case value2:
  code of block
  //break;

  default:
  code block  
}

There are many cases , are used in switch. It works on 
strict rules of comparison.default executes when value
 not equal to any case.

*/

// For example:-
let num1=prompt("Enter number one:")
let num2=prompt("Enter second number:")
let opr=prompt("Enter  operator which you want to perform them:")
switch(opr){
    case "+":
        let sum=Number(num1)+Number(num2);
        console.log(sum)
        break;
    case "-":
        let sub=Number(num1)-Number(num2);
        console.log(sub)
        break; 
    case "*":
        let pro=Number(num1)*Number(num2);
        console.log(pro)
        break;   
    case "/":
        let divide=Number(num1)/Number(num2);
        console.log(divide)
        break;    
    default:
        console.log("Not operator")       
}
