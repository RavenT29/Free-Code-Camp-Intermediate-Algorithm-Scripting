function translatePigLatin(str) {
  var arr=str.split("");
  var helpArr=[];
  var vowels = /[aeiou]/gi;
  var word="ay";
    //check if the first letter is a vowel. if yes, add "way" at the end
  if(arr[0].match(vowels)!==null) {
    arr.push("way");
    arr=arr.join("");
  } else {
    helpArr=arr.join("").split(vowels)[0]; //separate the first group of consonants
    arr.push(helpArr); //add that group at the end of the word
    arr.push(word); //add "ay"
    arr=arr.join("");  //join array into string
    arr=arr.substr(helpArr.length);  //remove the first group of consonants from the beginning of the word
  }

  return arr;
}

translatePigLatin("algorithm");
