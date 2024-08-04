/* 
In the example of function , I make a function that is used 
to find the grade of marks of student.
*/
let grade = (marks)=>{
    if(marks>90){
        console.log("Grade A")
    }else if(marks>80){
        console.log("Grade B")
    }else if(marks>70){
        console.log("Grade C")
    }else if(marks>60){
        console.log("Grade D")
    }else if(marks>50){
        console.log("Grade E")
    }else{
        console.log("Fail")
    }

}
grade(40);