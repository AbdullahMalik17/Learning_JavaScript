/*
<---------Call Back--------->
Call Back means invoking a function inside a function.
Call backs are used with the partenthesis 
when we use three or more call back , then it is difficult to 
understand. It is called Call Back hell.

*/

function sumcalculator(a,b){
    c=a+b;
    console.log(c)
}
function call(a,b,callback){
    callback(a,b)
}
call(1,3,sumcalculator) // This is a callback.