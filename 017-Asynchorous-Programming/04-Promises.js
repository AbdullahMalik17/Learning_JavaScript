/*
    <---------Promise-------->
    Promise are evetually completion of task. Thay are used as object in JavaScript. 
    They are used to manage the call back hell in JavaScript.
    Promise has three states rthat show in console s follows:-
    1. Pending
    2. Resolve
    3. Reject
    
    It's syntax as follows:-
        Declaration = new Promise((resolve,reject) =>{....})
*/
let p=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("hello")
        resolve("success")
        reject("reject")
    },3000)

})

/*Generally , we do not make a Promise. the following methods are used to 
 capture them.
   1. If the state turtns to fullfilled  . Then if we want to show some other things so we use the following syntax:-
       function.then((res) =>{.....})
       function returns the promise.
   2. If the state turn to be rejected . Then if we want to show some other things so we use the following syntax:-
       function.catch((err) =>{.....})
       function return the promise.
   3. If we want to show a message whether the data is fullfilled or not .Then, we use finally.
       It's syntax as follows:-
       funcion.finally(()=>{.....})     
*/          
 
 
function Asynf1(){
    return new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("Data1")
        resolve("success")
        reject("reject")
    },5000)    
    })}
    function Asynf2(){
    return new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("Data2")
        resolve("success")
        reject("reject")
    },5000)    
    })

} 
console.log("Fetching data1....")
Asynf1().then((res)=>{
  console.log('Fetching Data2')
Asynf2().then((res)=>{
  })
})
// we do same work with promise