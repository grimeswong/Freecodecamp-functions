/*
    a function that splits an array (first argument) into groups the length
    of size (second argument) and returns them as a two-dimensional array.
 */

 function chunkyMonkey(arr, size) {
  var newArray = [];
  for(var i=0; i < arr.length; i+=size) {
      newArray.push(arr.slice(i,i+size));
  }
  return newArray;
}

export default chunkyMonkey;
