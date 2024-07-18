/*
<---------- New date ---------->
It is used when user demanded date and time .

For making a current date:- 
 let date = new Date();

 For making new date :-
 let date = new Date("Month Days Year time")

 */

 // program :-

 let a = new Date()   //output: 2024-07-10T10:20:36.256Z
 console.log(a)
 let b = new Date("5 9 2024 15:19:00")
 console.log(b)       //output: 2024-05-09T10:19:00.000Z
 let c = new Date("9 2 2000 "); 
 console.log(c)       // output: 2000-09-01T19:00:00.000Z