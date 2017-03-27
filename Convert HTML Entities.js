function convertHTML(str) {
  // &colon;&rpar;
  var len=str.length;
  for(var i=0;i<len+5;i++){
    
  switch(str[i]) {
    case "&":
        str=str.replace("&","&amp;");
        break;
    case "<":
        str=str.replace("<","&lt;");
        break;
          case ">":
        str=str.replace(">","&gt;");
        break;
          case "\"":
        str=str.replace("\"","&quot;");
        break;
          case "'":
        str=str.replace("'","&apos;");
        break;
}  
  }
  return str;
}
