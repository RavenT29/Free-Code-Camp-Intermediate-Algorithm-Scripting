// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.


// FEB 2017

function repeatStringNumTimes(str, num) {

  var empty=[];
  if(num<0){return "";
           } else {
             while(num>0){
               num--;
               empty.push(str);
             }
           }
  return empty.join("");
}

// NOV 2017

function repeatStringNumTimes(str, num) {
  if(num<=0) return "";
  return str.repeat(num);
}

repeatStringNumTimes("abc", 3);
