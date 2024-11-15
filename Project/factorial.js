function factorial(number){
  if(number<0){
    return "The factorial of "+number+" is not possible"
  }
  else{
  let result=1;
   for(var i=1;i<=number;i++){
   result *=i
   }
   return result; 
  }
}
console.log(`The factorial of your number is: ${factorial(6)}`)

  