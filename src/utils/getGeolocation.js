/*
    Get current user geolocation and return the latitude and longitude
*/
function getGeolocation() {

  if(navigator.geolocation) {
    console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition(function(position) {
    var locationMessage = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    console.log(locationMessage);
      return locationMessage;
    });
  } else {
    return "Couldn't get user location details";
  }

}

export default getGeolocation;
