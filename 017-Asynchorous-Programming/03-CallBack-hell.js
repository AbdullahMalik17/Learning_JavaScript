/*
    <------Call Back Hell------>
    When we use different call back , it is difficult to understand to us. 
    This is callerd Callback Hell.

*/
   function getId(data,data2){
    setTimeout(() => {
        console.log("Data"+data)
        if (data2){
            data2()
        }
    },3000) 
   } 
   getId(1,() =>{
    console.log("Fetching Data2 ......")
    getId(2,() =>{
        console.log("Fetching Data3.....")
        getId(3,() =>{
            console.log("fetching data4......")
            getId(4)
     })
    })
   })
   // It is complex to be understandable called callback hell 