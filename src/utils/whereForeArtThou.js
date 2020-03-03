
/* Return an array the match the second parameters sets of array compare with
   first parameter(array)
*/

function whereforeArtThou(collection, source) {
  var arr = [];
  var keys = Object.keys(source);   //array of keys

  arr = collection.filter(function(colObject) {
    for(var j=0; j<keys.length; j++) {
      // 1) Check each key in source whether is in the collection's object
      // 2) Verify source value equals to the collection's object's value
      if(!colObject.hasOwnProperty(keys[j]) || colObject[keys[j]] !== source[keys[j]]) {
       return false;
      }
    }
    return true;
  });

  return arr;
}

export default whereforeArtThou;
