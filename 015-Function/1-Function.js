/*
   <----------Function----------->
   Functions are used to repeat a work . 
   They make the work easiest.

   For Example:- 
           There are several students in my school .
           I want to give them grade of your work.

*/
// Program :-
function grade(marks){
    if(marks>90){
        console.log("Grade A")
    }else if(marks>80){
        console.log("Grade B")
    }else if(marks>70){
        console.log("Grade C")
    }else if(marks>60){
        console.log("Grade D")
    } else {
        console.log("Fail")
    }

}           
grade(20)      // output Grade A
grade(30)        // ouput Fail
grade(50)      // output Grade C