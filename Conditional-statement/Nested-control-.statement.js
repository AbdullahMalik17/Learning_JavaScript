/*

<-------Nested Control statement------->
In which we use double if .
It's syntax as folows:-

if(condition){
  if(condition){

  }else{

  }
}
*/
//Program:-
let score = prompt("Please enter your score:");
if (score>80){
    console.log("reward ="+$100);
    if (score<85){
        console.log("reward ="+$150);
    }
    if(score<90){
        console.log("reward ="+$200);
    }

}else{
    console.log("failed");
}