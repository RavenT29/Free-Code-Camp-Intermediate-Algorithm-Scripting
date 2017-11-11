/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots
does not add to the string length in determining the truncated string.
*/


//FEB 2017

function truncateString(str, num) {
if(num<=3){
  str=str.slice(0,num);
  return str+"...";
} else if(num>=str.length){
  return str;
} else if (num>3){
  str=str.slice(0,num-3);
  return str+"...";
}
}

// NOV 2017

function truncateString(str, num) {
  if(str.length>num&&num>=3) return str.slice(0,num-3) + "...";
  if(str.length>num) return str.slice(0,num) + "...";
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
 
