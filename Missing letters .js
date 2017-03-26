function fearNotLetter(str) {
  var string="";
  str=str.split("");
  var missing="";
  for(var i=0;i<str.length;i++){
    str[i]=str[i].charCodeAt();
  }
  for(i=1;i<str.length;i++){
    if(str[i]!==str[i-1]+1) {
      missing=str[i-1]+1;
      return String.fromCharCode(missing);
    } 
  } 
}
fearNotLetter("bcd");
