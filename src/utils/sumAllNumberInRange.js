/*
  Return the sum of those two numbers and all numbers between them (two numbers (lowest numbers can come last)).
  eg. sumAllNumberInRange(1, 4) // result: 10
*/

function sumAllNumberInRange(arr) {

  var min = Math.min(arr[0], arr[1]);  // Math.min(...arr)
  var max = Math.max(arr[0], arr[1]);  // Math.max(...arr)
  var result = 0;
  for(var i=min; i<=max; i++) {
    result += i;
  }
  return result;
}

export default sumAllNumberInRange;
