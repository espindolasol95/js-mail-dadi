
// list of party
const listEmail = ["goku@hotmail.com , vegeta@hotmail.com , crilin@hotmail.com , gohan@hotmail.com" ]

//email request to user
const UserEmail = prompt ("enter your email");  

//control variable (star booleano) 
const accessAllowed = false

for (let i =0; i <listEmail.length; i++){
   if (UserEmail === listEmail [i])
   accessAllowed = true;                                      
 break;
      
}   
 if ( accessAllowed ) {
   console.log ("you are not on the list")
 } else {
   console.log ("welcome to the party")
 }


