/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.


["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] 
should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] 
should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].

*/

function diffArray(arr1, arr2) {
  var newArr = [];
  var newArr1=[];
  var newArr2=[];
  
  if(arr1.length===0) {
    
    return arr2;
    
  } else if(arr2.length===0) {
    
    return arr1;
    
  } else {
    
  for(i=0;i<arr1.length;i++){
    
    if(arr2.indexOf(arr1[i])===-1){
      newArr1.push(arr1[i]);
    }
    
    if(arr1.indexOf(arr2[i])===-1){
      newArr2.push(arr2[i]);
    }
  }
  }
  
  newArr=newArr1.concat(newArr2);
  newArr=newArr.filter(Boolean);

  return newArr;
 
}
