/*
    A function which shifts 13 ciphers to encode string as input and returns a decoded string.
 */

function caesarCipher(str) {
  str.toUpperCase();
  var array = str.split('').map(function(val) {
    if(val.charCodeAt(0) < 65 || val.charCodeAt(0) > 90)  {
      return val;
    } else if (val.charCodeAt(0) >= 65 && val.charCodeAt(0) < 78) {
      return String.fromCharCode(val.charCodeAt(0) + 13);
    } else {
      return String.fromCharCode(val.charCodeAt(0) - 13);
    }
  });
  return array.join('');
}

export default caesarCipher;
