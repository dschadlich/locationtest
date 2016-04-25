$( document ).ready(function (){
// upDateLocation ();
setInterval(upDateLocation,5000);



});



function upDateLocation (){
  navigator.geolocation.getCurrentPosition(function(location) {
    console.log ("updating location");
    $("#location").html (location.coords.latitude + "<br />" + location.coords.longitude + "<br />" + location.coords.accuracy);

    // console.log(location.coords.latitude);
    // console.log(location.coords.longitude);
    // console.log(location.coords.accuracy);
  });
}
