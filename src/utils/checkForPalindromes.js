/*
    A palindrome is a word or sentence that's spelled the same way both forward
    and backward, ignoring punctuation, case, and spacing.
    Return true if the given string is a palindrome. Otherwise, return false.
 */

 function checkForpalindromes(str) {
  var temp ="";
  temp = str.toLowerCase(); // to lower case
  var reExp = /[a-z0-9]/g; // sift the string for a to z and 0 - 9 only
  temp = temp.match(reExp); // the temp array is now that a set of characters and number
  var newString = "";

  // Concatenate characters into a string
  for(var i = 0; i < temp.length;i++) {
    newString = newString.concat(temp[i]);
  }

  if (newString.length>1) { // check if the string more than one character
    while(newString.length >= 2) {
      if(newString[0] === newString[newString.length-1]) {  // compare the first character and last character
        newString = newString.slice(1, newString.length-1);  // remove the head and tail of the string
      } else {
        return false;
      }
    }
    return true;  // After confirm all the comparation, return true
  } else {
    return false; // Return false if string is less than 2 that cannot be compared
  }
}

export default checkForpalindromes;
