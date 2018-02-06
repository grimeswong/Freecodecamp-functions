/*
    Remove all elements from the initial array that are of the same value as these arguments.
    eg. [1,2,3,1,2,3] 2,3] return [1,1]
 */

function seekAndDestroy(arr) {
  var newArray = [];
  for(var i = 1; i<arguments.length;i++) {
    newArray.push(arguments[i]);
  }

  function sift(val) {
    return newArray.includes(val) ? false : true;
  }
  return arr.filter(sift);
}

export default seekAndDestroy;
