/*
    Check if a string (first argument, str) ends with
    the given target string (second argument, target).
 */

 function confirmTheEnding(str, target) {
   var targetStart = str.length-target.length;
   return (str.substring(targetStart, str.length) === target) ? true : false;
 }

 export default confirmTheEnding ;
