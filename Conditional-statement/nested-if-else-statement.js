/*

<--------Nested if else statement------->
They are used when multiple condition are applied in a program .
For example, a program of giving grades.
It's syntax as follows:-

if(condition){

} else if (condition){               
 
}else if(cndition){

}else {

} 

*/
// Program:-

let marks = prompt("Enter your marks in matric");
if(marks>90){
    document.write("Grade A");
}else if(marks>80){
    document.write("Grade B");
}else if(marks>70){
    document.write("Grade C");
}else if (marks>60){
    document.write("Grade D");
} else if(marks>50){
    document.write("Grade C");
}else {
    document.write("Failed"); 
}