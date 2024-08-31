/*
    <---------Async-Await--------.
    They are used to make easiest Asynchoronous programmming.
    Async always return promise and Awaith stop the below the below work 
    until the promise proceed.
// It's syntax as follows:-
   async function function-name{
   await function;
   }
    We also use try and catch . try is used as hen in the async function . 
*/
function getdata1(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("Data1")
            resolve("Data1");
            reject("failed");  
        },4000)
    })
}
function getdata2(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
      console.log("Data2")    
            resolve("Data2");
            reject("failed");  
        },4000)
    })
}
async function fetch(){
try{     await getdata1()
     console.log("Fetching data 2.....") 
     await getdata2()
}catch{
    console.log("Data is not fetch")
}
}
fetch()
/* 
They do not call itself.We write a fetch function in the console.
IIFE Function is a part of advance JavaScrit . It'automatically call itself.
     It,s syntax as follows:-
       (async function function-name{
        await function-name

        })();
*/      
(async function fetch2(){
    await getdata1()
    console.log("Fetching data 2.....") 
    await getdata2()
})()
