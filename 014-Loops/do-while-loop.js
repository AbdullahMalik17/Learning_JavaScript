/*
<---------Do while loop---------->
  It repeat a code of block like other loops  but if the condition
  turns to  be false then only one time the code executes.
  
  It's syntax as follows:
  do{
    code of block
  } while (condition)

  */
 // For example:
 let admin ="Abdullah"
 let password;
 let username;
 do {
    password=prompt("Enter password:")
    username=prompt("Enter Username:","Abdullah")
 }while(password!=1234||username!=admin);
    console.log("Log in Successfully")