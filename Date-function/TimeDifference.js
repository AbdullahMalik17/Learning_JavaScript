/*
<---------Time Difference---------->
This method is used to calculate the Time Difference between two era .
This method is as follows:-
           
                         Time in millimeter(After)  -   Time in millimeter(Before)  /(365*24*60*)

*/
// program:- 
// Time of 9th class 
 let result9th= new Date("8 22 2023 10:00:00")
 // Time of 10 th class 
let result10th= new Date("7 9 2024 10:00:00")
// Time Difference in days
let timediff =result10th.getTime()-result9th.getTime()
let days= timediff/(60*60*1000*24)
console.log(days)  // output 322 days
