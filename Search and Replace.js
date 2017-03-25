function myReplace(str, before, after) {
  before=before.split("");
  after=after.split("");
  if(before[0]==before[0].toUpperCase()){
    after[0]=after[0].toUpperCase();
  }else{
    after[0]=after[0].toLowerCase();
  }
  
  return str.replace(before.join(""), after.join(""));
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
