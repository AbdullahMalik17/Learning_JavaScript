/*
                <---------Call Back--------->
   Call Back means invoking a function inside a function.
   Call backs are used with the partenthesis. 
   When we use three or more call back , then it is difficult to 
   understand. It is called Call Back hell.

                 <-------Arrow Function------->
   It is a funtion that is executed for one time in a place where it is written.
  
*/

function sumcalculator(a,b){
    c=a+b;
    console.log(c)
}
function call(a,b,callback){
    callback(a,b)
}
call(1,3,sumcalculator) // This is a callback. output:4