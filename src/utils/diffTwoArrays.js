/*
  Return the difference of two arrays' element(s)
*/

function diffTwoArray(arr1, arr2) {
  var newArr = [];
  var result = [];
  newArr = arr1.concat(arr2).sort();

  while(newArr.length !== 0) {
    if(newArr[0] === newArr[1]) {
      newArr = newArr.slice(2);
    } else {
      result.push(newArr[0]);
      newArr = newArr.slice(1);
    }
  }
  return result;
}

export default diffTwoArray;
