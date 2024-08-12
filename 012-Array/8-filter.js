/* 
<------filter------->
It is used to return a new array after filter the array.
Filter means print that element which obey condition.
It's syntax as follows:-y
  array.filter(() =>{
      business logic(condition)
    });
 */
// For example:-
    let num = [1,2,3,4,5,6,7,8,9]
    let n = num.filter((a) =>{
      return a%2==0
    }) 
    console.log(n);  // return [2,4,6,8]