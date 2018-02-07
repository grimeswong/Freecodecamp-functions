/*
    Remove all falsy values from an array like false, null, 0, "", undefined, and NaN.
 */

 function falsyBouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArray = arr.filter(test);
 function test(element) {
   if (element !== undefined || 0 || NaN || "" || false || null) {
    return element;
   }
 }

  return newArray;
}

export default falsyBouncer;
