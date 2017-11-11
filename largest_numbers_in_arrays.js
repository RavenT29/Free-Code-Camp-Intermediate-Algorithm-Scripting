/*
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/


// FEB 2017

function largestOfFour(arr) {
  var array=[];
  for(var i=0;i<4;i++){
    var count=0;
    for(var j=0;j<arr[i].length;j++){
      if(count<arr[i][j]) {
        count=arr[i][j];
      }
      array[i]=count;
    }
  }
  return array;
}

// NOV 2017

function largestOfFour(arr) {
  return arr.map((item)=>{
    return Math.max.apply(null, item);
  }); 
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

