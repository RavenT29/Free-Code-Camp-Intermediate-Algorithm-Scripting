//Convert the given number into a roman numeral.

function convertToRoman(num) {
  var roman=[ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var arabic=[ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var converted=[];
  
//only numbers up to 3999 can be converted to roman numerals

  if(num>3999) {
    return "Number is too high";
  } else {
    for(var i=0; i<arabic.length; i++){
      var count=3;
      while(count>0){ //each roman letter can be repeated max 3 times. the "while" loop makes sure you enter "if" 3 times
        if(num>=arabic[i]){
          converted.push(roman[i]);
          num-=arabic[i];   
        }
        count--;
      } 
    } 
    
  }
  
 return converted.join("");
}
