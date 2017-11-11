/* 
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

// NOV 2017

function findLongestWord(str) {
  str = str.split(" ").map((item)=>{
    return item.length;
  })
return Math.max.apply(null,str);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
