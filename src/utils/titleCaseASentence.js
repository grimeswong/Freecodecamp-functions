/*
  Return the provided string with the first letter of each word capitalized.
  And rest of the word is in lower case.
*/

function titleCaseASentence(str) {
  str = str.toLowerCase();
  var newArray = str.split(' ');
  for(var i=0; i<newArray.length;i++) {
    newArray[i] =  upperFirstChar(newArray[i]);
  }
  newArray = newArray.join(' ');
  return newArray;
}

function upperFirstChar(str) {
  var newStr = str.replace(str.charAt(0), str.charAt(0).toUpperCase());
  return newStr;
}

export default titleCaseASentence;
