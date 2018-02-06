/*
    Get current user geolocation and return the latitude and longitude
*/
function getGeolocation() {

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      return position;
    });
  } else {
    return "Unable to locate user location";
  }
}

export default getGeolocation;
