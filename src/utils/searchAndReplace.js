/*  Perform a search and replace on the sentence using the arguments provided and return the new sentence.
    First argument is the sentence to perform the search and replace on.
    Second argument is the word that you will be replacing (before).
    Third argument is what you will be replacing the second argument with (after).
    NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog" */

function searchAndReplace(str, before, after) {

  // Change the "after" first charter to uppercase if the "before" first character is uppercase
  if(before.charCodeAt(0) >= 65 && before.charCodeAt(0) <= 90) {
     after = after.split(' ');
     for(var i=0; i<after.length;i++) {
       var newStr= after[i];
       after[i] = newStr.replace(newStr.charAt(0), newStr.charAt(0).toUpperCase()); // replace the first char to uppercase
     }
  }
  str = str.replace(before, after);
  return str;
}

export default searchAndReplace;
