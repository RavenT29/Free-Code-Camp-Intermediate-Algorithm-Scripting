function addTogether(a,b) {
  //there are 3 cases:1. a and b are both numbers and it returns a+b; 2.there is only one argument and it is a number and it returns argument+2; and 3.undefined
  
 if(arguments.length===2){
   if(typeof a=='number'&&typeof b=='number'){
     return a+b;
   }else{
     return undefined;
   }
 } else if(arguments.length===1&&typeof a=='number'){
   return function (num){
     if(typeof num=="number"){
       return num+2;
     } else {
       return undefined;
     }
   };
 } else {
   return undefined;
 }
}
