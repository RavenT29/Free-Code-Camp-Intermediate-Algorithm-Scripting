/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

// FEB 2017

function titleCase(str) {
  var arr=[];
  arr=str.toLowerCase().split(" ");
  return arr.map(function(val){
    return val.replace(val[0], val[0].toUpperCase());
  }).join(" ");
  }
  
  // NOV 2017
  
  function titleCase(str) {
  return str.toLowerCase().split(" ").map((item)=>{
    return item.replace(item[0],item[0].toUpperCase());
  }).join(" ");
}
