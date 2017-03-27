function binaryAgent(str) {
  str=str.split(" ");  //splits sting
  for(var i=0;i<str.length;i++){
   str[i]=parseInt(str[i], 2); //transforms each element from binary
   str[i]=String.fromCharCode(str[i]);//transforms each element from ascii to character
  }
  return str.join("");
}
