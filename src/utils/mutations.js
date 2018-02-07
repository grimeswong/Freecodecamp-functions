/*
    Return true if the string in the first element of the array contains
    all of the letters of the string in the second element of the array.
    eg. ["hello", "Hello"], should return true because all of the
    letters in the second string are present in the first, ignoring case.
 */

 function mutations(arr) {
  var newArray = arr.map(function(x) {return x.toLowerCase();});
  var originChar = newArray[0].split('');
  var compareChar = newArray[1].split('');
  for(var i=0;i<compareChar.length;i++) {
    if (originChar.indexOf(compareChar[i]) === -1 ) {
      return false;
    }
  }
  return true;
}

export default mutations;
