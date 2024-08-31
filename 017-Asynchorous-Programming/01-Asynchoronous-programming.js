/*
<--------Synchoronous Programming-------->
   It means all the program is executed in a given sequence. Each instruction is wait 
   the previous instruction.
   For example:-
        A simple way of Programming is called Synchorous Programming.
        When we fetch data from API , It require some time to send data in case the whole execution is stopped in 
        synchorous programming.
       
<-------Asynchoronous Programming--------->
   Due to Synchorous Programming , all the execution is stopped for some second.
   To meet this problem , we use Asynchoronous Programming.
    Function:-
         setTimeOut is an asynchorous function . It stop the function for that time which we want and runs the 
         below code.
         
 <------setTimeout------->
   It's syntax as follows:-
      setTimeout(function-name, time in millisecond)

 */
console.log("Data 1");
console.log("Data 2");
setTimeout(() =>{
    console.log("Data 3")   // It is executed after 5 seconds , below is executed.
},5000);     
console.log("Data 4")
console.log('Data 5')   