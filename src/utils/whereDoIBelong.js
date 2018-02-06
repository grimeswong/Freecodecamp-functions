/*
    Return the lowest index at which a value (second argument) should be
    inserted into an array (first argument) once it has been sorted.
    The returned value should be a number.
 */

function whereDoIBelong(arr, num) {

  arr.sort(function(a,b) {  // sort number ascending
    return a-b;
  });

  function compare(num) {
    var temp = 0;
    for(var i=0; i<arr.length;i++) {
       if(num > arr[i]) {
         temp = i+1;
       }
    }
    return temp;
  }
  return compare(num);
}

export default whereDoIBelong;
