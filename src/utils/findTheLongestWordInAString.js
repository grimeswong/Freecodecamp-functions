/*
    Return the length of the longest word in the provided sentence.
 */

function findTheLongestWordInAString(str) {
  var newArray = str.split(' ');
  var longest = newArray[0];
  for(var i = 1; i<newArray.length; i++) {
    if(longest.length < newArray[i].length) {
      longest = newArray[i];
    }
  }
  return longest.length;
}

export default findTheLongestWordInAString;
