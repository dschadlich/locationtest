$( document ).ready(function (){
// upDateLocation ();

var id, target, options;

function success(pos) {
  console.log (pos);
  var crd = pos.coords;
  $("#location").html (crd.latitude+ "<br />" + crd.longitude+ "<br />" + crd.accuracy);



}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}



options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);


});
